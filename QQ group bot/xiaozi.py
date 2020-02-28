# -*- coding: utf-8 -*-
import json
import requests
import re
from bs4 import BeautifulSoup
import time
import execjs
import threading

# import sys
# reload(sys)
# sys.setdefaultencoding('utf-8')

headers1 = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36",
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Origin": "https://d1.web2.qq.com",
    "Referer": "https://d1.web2.qq.com/cfproxy.html?v=20151105001&callback=1",
    "Cookie": "pac_uid=1_236294386; pgv_pvi=5494030336; RK=Sel7mfwefb; ptcz=e129678bf2d0960dff8213c1be5146034988976832a05cfab570f7f13a4e8971; ptui_loginuin=236294386@qq.com; pgv_si=s1269096448; ptisp=cnc; pt2gguin=o0236294386; uin=o0236294386; skey=@VeK8sv3KA; p_uin=o0236294386; p_skey=25lbgr3TGMDwp2b-UvAMx-eoNcRUj3DEkjxukGwlnDU_; pt4_token=fYelvtpf*zvduuDYo*iGlcGXzYaxyra8*2Z1OvPXqO0_; pgv_info=ssid=s7137432370; pgv_pvid=1612534036; o_cookie=236294386; ptwebqq=ff5619c6bd54f68c82cf102fa91a832aefdf5c484a69b1666c413fad9d43772c",
    "Connection": "keep-alive",
}

payload_recv = {
    "r": json.dumps(
        {"ptwebqq": "ff5619c6bd54f68c82cf102fa91a832aefdf5c484a69b1666c413fad9d43772c", "clientid": 53999199,
         "psessionid": "8368046764001d636f6e6e7365727665725f77656271714031302e3133332e34312e383400001ad00000066b026e040015808a206d0000000a406172314338344a69526d0000002859185d94e66218548d1ecb1a12513c86126b3afb97a3c2955b1070324790733ddb059ab166de6857",
         "key": ""})
}

ctx = execjs.compile("""
function tdisoper(f0,f1,f2,f3)
{
    this[0]=f0;
    this[1]=f1;
    this[2]=f2;
    this[3]=f3;
}
disoper=new tdisoper("-","+","/","*");
function oper(f,m,n)
{
    if (f==3) return(m*n);
    if (f==2) return(m/n);
    if (f==1) return(parseFloat(m)+parseFloat(n));
    if (f==0) return(m-n);
}
function tb(i1,i2,i4,i8)
{
    this[1]=i1;
    this[2]=i2;
    this[4]=i4;
    this[8]=i8;
}
function valid(a1,a2,a4,a8)
{
    n=1;
    if (isNaN(a1)){return "";}
    if (isNaN(a2)){return "";}
    if (isNaN(a4)){return "";}
    if (isNaN(a8)){return "";}
    b=new tb(a1,a2,a4,a8);

    k=0;
    var sum_string = "";
    for (i1=1;i1<=8;i1*=2)
        for (i2=1;i2<=8;i2*=2)
            for (i3=1;i3<=8;i3*=2)
                for (i4=1;i4<=8;i4*=2)
                {
                    if ((i1|i2|i3|i4)!=0xf) continue;
                    for (f1=0;f1<=3;f1++)
                        for (f2=0;f2<=3;f2++)
                            for (f3=0;f3<=3;f3++)
                            {
                                m=oper(f3,oper(f2,oper(f1,b[i1],b[i2]) ,b[i3] ) ,b[i4]);
                                if (Math.abs(m-24)<1e-5 ) {
                                    sum_string=sum_string+"(("+b[i1]+disoper[f1]+b[i2]+")"+disoper[f2]+b[i3]+")"+disoper[f3]+b[i4]+" ";
                                    if ((n!=0)&&(++k>=n)) return sum_string;
                                }
                                m=oper(f1, b[i1], oper(f3, oper(f2,b[i2],b[i3]) ,b[i4]) );
                                if (Math.abs(m-24)<1e-5){
                                    sum_string=sum_string+b[i1]+disoper[f1]+"(("+b[i2]+disoper[f2]+b[i3]+")"+disoper[f3]+b[i4]+") ";
                                    if ((n!=0)&&(++k>=n)) return sum_string;
                                }
                                m=oper(f3,oper(f1,b[i1], oper(f2,b[i2],b[i3]) ),b[i4]);
                                if (Math.abs(m-24)<1e-5){
                                    sum_string=sum_string+"("+b[i1]+disoper[f1]+"("+b[i2]+disoper[f2]+b[i3]+"))"+disoper[f3]+b[i4]+" ";
                                    if ((n!=0)&&(++k>=n)) return sum_string;
                                }
                                m=oper(f1, b[i1], oper(f2, b[i2], oper(f3, b[i3], b[i4]) ) );
                                if (Math.abs(m-24)<1e-5){
                                    sum_string=sum_string+b[i1]+disoper[f1]+"("+b[i2]+disoper[f2]+"("+b[i3]+disoper[f3]+b[i4]+")) ";
                                    if ((n!=0)&&(++k>=n)) return sum_string;
                                }
                                m=oper(f2,oper(f1,b[i1],b[i2]), oper(f3,b[i3],b[i4]) );
                                if (Math.abs(m-24)<1e-5){
                                    sum_string=sum_string+"("+b[i1]+disoper[f1]+b[i2]+")"+disoper[f2]+"("+b[i3]+disoper[f3]+b[i4]+") ";
                                    if ((n!=0)&&(++k>=n)) return sum_string;
                                }

                            }
                }
    sum_string=sum_string+"----END---- "
    return sum_string;
}
""")


# 字符串里的\n会造成执行js错误


# 根据时间自动执行部分
# 全局变量
time_auto_flag = [True]
start_time = 1486666800
end_time = 1486677600

# 远程控制部分
zimi_flag = [False]
point24_flag = [False]

# 捕获信息
group_code = [2026647259]
send_uin = [2291227595]


def handle_24point(sum_string):
    matchObj = re.search(u"""种解法）：([\s\S]*)将以上数字加减乘除[\s\S]*""", sum_string)
    if matchObj:
        print u"捕获 24点 ", matchObj.group(1).replace(',', '').replace('\n', '')
        four_nums = [int(x) for x in matchObj.group(1).replace(',', '').replace('\n', '').split(' ')]
        print four_nums
        if len(four_nums) != 4:
            return
        result = ctx.call("valid", four_nums[0], four_nums[1], four_nums[2], four_nums[3]).replace(' ', '')
        print u"24点 " + result

        time.sleep(1)
        send_message(u"24点 " + result)

        # time.sleep(2)
        # send_message(u"存积分 100")


def handle_zimi(sum_string):
    matchObj = re.search(u"""猜字谜[\s\S]*当前题目：([\s\S]*)提示：打一字[\s\S]*""", sum_string)
    if matchObj:
        print u"捕获字谜题:", matchObj.group(1) + u"打一字"
        result = zimi_baidu_search(matchObj.group(1) + u"打一字")
        if result is not None:
            print u"自动猜字谜结果:" + result
            time.sleep(2)
            send_message(u"我答" + result)
            time.sleep(7)
            # send_message(u"存积分 200")
            # time.sleep(7)
            # send_message(u"开始猜字谜")



def zimi_baidu_search(msg):
    data = {'wd': u"%s" % msg, 'ie': 'utf-8'}
    response = requests.get('http://www.baidu.com/s', params=data, timeout=5, verify=False)
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    # t = soup.find('div', class_='op_exactqa_s_answer')
    # print t

    t = soup.div.select('.op_exactqa_s_answer')
    if len(t) > 0:
        return t[0].text.replace(' ', '').replace('\n', '')[0]
    else:
        return None


def send_message(msg):
    payload_send = {
        "r": json.dumps({
            "group_uin": group_code[0],
            "content": u"[\"%s\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]" % msg,
            "face": 30018, "clientid": 53999199, "msg_id": 18620001,
            "psessionid": "8368046764001d636f6e6e7365727665725f77656271714031302e3133332e34312e383400001ad00000066b026e040015808a206d0000000a406172314338344a69526d0000002859185d94e66218548d1ecb1a12513c86126b3afb97a3c2955b1070324790733ddb059ab166de6857"
        })
    }
    response = requests.post("https://d1.web2.qq.com/channel/send_qun_msg2", data=payload_send, headers=headers1,
                             verify=False)
    print (u"发送字符串:" + msg + u"  发送结果:" + response.text)

    # 如果发送失败,阻塞式循环发送5次
    if "404" in response.text:
        for i in range(1, 6):
            time.sleep(2)
            response = requests.post("https://d1.web2.qq.com/channel/send_qun_msg2", data=payload_send, headers=headers1,
                                 verify=False)
            print (u"发送字符串:" + msg + u"  发送结果:" + response.text)
            if "404" not in response.text:
                break


# send_message("开始猜字谜")


def recv_message():
    try:
        # 这里若写成params=payload就会加在url后面,造成一直获取不到的bug,若写成data=payload就会写在body里
        response = requests.post("https://d1.web2.qq.com/channel/poll2", data=payload_recv, headers=headers1, verify=False)
        # response.encoding = 'gbk'

        # object = eval(response.text)
        # object = response.json()

        object = json.loads(response.text)
        print object

        # 如果因为cookie过期导致请求失败，不要循环请求，避免被封
        if 'errmsg' in object and 'retcode' in object and object['retcode'] == 100012:
            return False
        if 'group_code' not in object['result'][0]['value']:
            return True
        print "group_code:%ld" % object['result'][0]['value']['group_code']
        print "send_uin:%ld" % object['result'][0]['value']['send_uin']

        sum_string = ""
        for ele in object['result'][0]['value']['content']:
            if type(ele) != list:
                sum_string = sum_string + ele
        print sum_string

        # EDA群'group_code': 2793413251
        # 小紫'send_uin': 1767401797

        # 软院大群 1744453610
        # 大群机器人 3671388676

        if object['result'][0]['value']['group_code'] == group_code[0] and object['result'][0]['value'][
            'send_uin'] == send_uin[0]:
            print u"捕获小紫在eda群"

            if "236294386" in sum_string and u"auto24点on" in sum_string:
                point24_flag[0] = True
                send_message(u"auto24点on成功")
            if "236294386" in sum_string and u"auto24点off" in sum_string:
                point24_flag[0] = False
                send_message(u"auto24点off成功")
            if "236294386" in sum_string and u"auto猜字谜on" in sum_string:
                zimi_flag[0] = True
                send_message(u"auto猜字谜on成功")
            if "236294386" in sum_string and u"auto猜字谜off" in sum_string:
                zimi_flag[0] = False
                send_message(u"auto猜字谜off成功")
            if "236294386" in sum_string and u"切换群 软院大群" in sum_string:
                group_code[0] = 1744453610
                send_uin[0] = 3671388676
                send_message(u"群切换成功")
            if "236294386" in sum_string and u"切换群 eda群" in sum_string:
                group_code[0] = 2026647259
                send_uin[0] = 2291227595
                send_message(u"群切换成功")

            if zimi_flag[0]:
                handle_zimi(sum_string)
            if point24_flag[0]:
                handle_24point(sum_string)

    except Exception, e:
        print Exception, ":", e
        return True
    return True


def timer_tick():
    # 每5分钟发送开始24点，保证一个晚上刷24点不断的健壮性
    while True:
        # if start_time < time.time() < end_time and time_auto_flag[0]:
        zimi_flag[0] = True
        point24_flag[0] = True
        #     send_message(u"开始24点")
        # elif time.time() > end_time and time_auto_flag[0]:
        #     send_message(u"2017年2月9日6点0分0秒,停止")
        #     time_auto_flag[0] = False
        #     zimi_flag[0] = False
        #     point24_flag[0] = False
        print "timer_tick:" + str(time.time())
        time.sleep(300)

# 请勿使用timer，只能执行一次的
# timer = threading.Timer(300, timer_tick)
# timer.start()


t1 = threading.Thread(target=timer_tick)
t1.setDaemon(True) # 该线程不重要，主线程退出程序直接结束
t1.start()

flag = True
while flag:
    flag = recv_message()

# print zimi_baidu_search(u"村里又来了一位女村官打一字")
# print ctx.call("valid", 6, 8, 4, 3).replace(' ', '')
