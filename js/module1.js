/**
 * Created by Administrator on 2017/2/8.
 */
define( function (require,exports,module){
    //require,exports,module�����������ǹ̶��ģ��������޸ĵģ��൱�ڹؼ���
    //��д�ɲ�д�����Ҫ��д�Ļ���ֻ����д����ģ�������дǰ��ģ�
    //�������дrequire,exports��Ҳ����дrequire������дexports,module������module��
    //һ������¶�д�ϱȽϺ�
    function show(){
        alert(1);
    }
    exports.fn1 = show ;  //exports:�����ṩ�ӿڵĶ���,��show��������������ܹ��ҵ�
})

function show(){
    alert(2);
}