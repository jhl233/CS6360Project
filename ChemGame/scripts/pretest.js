function submitPretest() {
    Cookies.set('surveyed', true, {expires: 365});
    
    //test 1 
    Cookies.set('t1_1', $("[name=test1_1]")[0].value);
    Cookies.set('t1_2', $("[name=test1_2]")[0].value);
    Cookies.set('t1_3', $("[name=test1_3]")[0].value);

    // test 2
    Cookies.set('t2_1', $("[name=test2_1]")[0].value);
    Cookies.set('t2_2', $("[name=test2_2]")[0].value);
    Cookies.set('t2_3', $("[name=test2_3]")[0].value);
    Cookies.set('t2_4', $("[name=test2_4]")[0].value);

    // test 3
    Cookies.set('t3_1', $("[name=test3_1]")[0].value);
    Cookies.set('t3_2', $("[name=test3_2]")[0].value);
    Cookies.set('t3_3', $("[name=test3_3]")[0].value);
    Cookies.set('t3_4', $("[name=test3_4]")[0].value);

    // test 4
    Cookies.set('t4_1', $("[name=test4_1]")[0].value);
    Cookies.set('t4_2', $("[name=test4_2]")[0].value);
    Cookies.set('t4_3', $("[name=test4_3]")[0].value);
    Cookies.set('t4_4', $("[name=test4_4]")[0].value);

    // test 5
    Cookies.set('t5_1', $("[name=test5_1]")[0].value);
    Cookies.set('t5_2', $("[name=test5_2]")[0].value);
    Cookies.set('t5_3', $("[name=test5_3]")[0].value);
    Cookies.set('t5_4', $("[name=test5_4]")[0].value);

    // test 6
    Cookies.set('t6_1', $("[name=test6_1]")[0].value);
    Cookies.set('t6_2', $("[name=test6_2]")[0].value);
    Cookies.set('t6_3', $("[name=test6_3]")[0].value);
    Cookies.set('t6_4', $("[name=test6_4]")[0].value);
}
