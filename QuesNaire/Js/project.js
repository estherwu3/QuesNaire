﻿//  填空实体类
class Input {
    constructor(title, flag) {
        this.title = title;
        this.flag = flag;
    }
}

//  单选实体类
class Radio {
    constructor(title, flag, items) {
        this.title = title;
        this.flag = flag;
        this.items = items;
    }
}

//  多选实体类
class CheckBox {
    constructor(title, flag, items) {
        this.title = title;
        this.flag = flag;
        this.items = items;
    }
}

//  填空结果实体类
class InputResult {
    constructor(title, flag, input) {
        this.title = title;
        this.flag = flag;
        this.input = input;
    }
}

//  单选结果实体类
class RadioReuslt {
    constructor(title, flag, item) {
        this.title = title;
        this.flag = flag;
        this.item = item;
    }
}

//  多选结果实体类
class CheckBoxResult {
    constructor(title, flag, items) {
        this.title = title;
        this.flag = flag;
        this.items = items;
    }
}


var naire = {
    "title": "标题",
    "hint": "描述",
    "list": [
        { "title": "填空题1", "flag": 1 },
        { "title": "单选题1", "flag": 2, "items": ["A", "B", "C", "D", "E", "F"] },
        { "title": "填空题2", "flag": 1 },
        { "title": "单选题2", "flag": 2, "items": ["A", "B"] },
        { "title": "多选题1", "flag": 3, "items": ["A", "B"] },
        { "title": "多选题2", "flag": 3, "items": ["A", "B"] }
    ]
}

var naire_title = document.getElementById('naire_title');
var naire_hint = document.getElementById('naire_hint');

var div_naire = document.getElementById('question_box');

naire_title.innerText = naire.title;
naire_hint.innerText = naire.hint;

var naire_list = naire.list;
//  自执行函数生成表单
(function () {
    for (var i = 0; i < naire_list.length; i++) {

        switch (naire_list[i].flag) {
            case 1:
                var naire_item = document.createElement('div');
                naire_item.setAttribute('data-type', 'input');
                naire_item.setAttribute('data-item', 'question');
                naire_item.classList.add('naire_item');

                var naire_item_title = document.createElement('div');
                naire_item_title.classList.add('naire_item_title');
                naire_item_title.innerText = i + 1 + "." + naire_list[i].title;

                var naire_must = document.createElement('span');
                naire_must.classList.add('naire_must');
                naire_must.innerText = "*";

                naire_item_title.appendChild(naire_must);

                naire_item.appendChild(naire_item_title);

                var input_item = document.createElement('input');
                input_item.setAttribute('type', 'text');
                input_item.setAttribute('data-question-item', 'input');
                input_item.classList.add('input_item');

                var naire_item_input = document.createElement('div');
                naire_item_input.appendChild(input_item);

                naire_item.appendChild(naire_item_input);

                div_naire.appendChild(naire_item);
                //console.log('tiankong');
                break;
            case 2:
                var naire_item = document.createElement('div');
                naire_item.setAttribute('data-type', 'radio');
                naire_item.setAttribute('data-item', 'question');
                naire_item.classList.add('naire_item');

                var naire_item_title = document.createElement('div');
                naire_item_title.classList.add('naire_item_title');
                naire_item_title.innerText = i + 1 + "." + naire_list[i].title;

                var naire_must = document.createElement('span');
                naire_must.classList.add('naire_must');
                naire_must.innerText = "*";

                naire_item_title.appendChild(naire_must);

                naire_item.appendChild(naire_item_title);

                var naire_item_items = document.createElement('div');
                naire_item_items.classList.add('naire_item_items');

                (function () {
                    for (var item = 0; item < naire_list[i].items.length; item++) {

                        var input_item = document.createElement('input');
                        input_item.setAttribute('type', 'radio');
                        input_item.setAttribute('name', naire_list[i].title);
                        input_item.setAttribute('data-question-item', 'radio');
                        input_item.setAttribute('value', naire_list[i].items[item]);

                        var radio_value = document.createElement('span');
                        radio_value.classList.add('item_value');
                        radio_value.innerText = naire_list[i].items[item];

                        var radio_item = document.createElement('div');
                        radio_item.classList.add('radio_item');
                        radio_item.appendChild(input_item);
                        radio_item.appendChild(radio_value);

                        naire_item_items.appendChild(radio_item);

                        naire_item.appendChild(naire_item_items);
                    }
                }());

                div_naire.appendChild(naire_item);
                //console.log('danxuan');
                break;
            case 3:
                var naire_item = document.createElement('div');
                naire_item.setAttribute('data-type', 'checkbox');
                naire_item.setAttribute('data-item', 'question');
                naire_item.classList.add('naire_item');

                var naire_item_title = document.createElement('div');
                naire_item_title.classList.add('naire_item_title');
                naire_item_title.innerText = i + 1 + "." + naire_list[i].title;

                var naire_must = document.createElement('span');
                naire_must.classList.add('naire_must');
                naire_must.innerText = "*";

                naire_item_title.appendChild(naire_must);

                naire_item.appendChild(naire_item_title);

                var naire_item_items = document.createElement('div');
                naire_item_items.classList.add('naire_item_items');

                (function () {
                    for (var item = 0; item < naire_list[i].items.length; item++) {

                        var input_item = document.createElement('input');
                        input_item.setAttribute('type', 'checkbox');
                        input_item.setAttribute('name', naire_list[i].title);
                        input_item.setAttribute('data-question-item', 'checkbox');
                        input_item.setAttribute('value', naire_list[i].items[item]);

                        var checkbox_value = document.createElement('span');
                        checkbox_value.classList.add('item_value');
                        checkbox_value.innerText = naire_list[i].items[item];

                        var checkbox_item = document.createElement('div');
                        checkbox_item.classList.add('checkbox_item');
                        checkbox_item.appendChild(input_item);
                        checkbox_item.appendChild(checkbox_value);

                        naire_item_items.appendChild(checkbox_item);

                        naire_item.appendChild(naire_item_items);
                    }
                }());

                div_naire.appendChild(naire_item);
                //console.log('duoxuan');
                break;
        }
    }
}());

//  提交按钮的相关操作
var btn_submit = document.getElementById('btn_submit');
btn_submit.addEventListener('click', submit, false);

function submit(){
    var title = document.getElementById('naire_title').value;
    var hint = document.getElementById('naire_hint').value;

    var naire_questions = document.querySelectorAll('div[data-item="question"]');
    var naire_questions_list = new Array();

    (function () {
        for (var i = 0; i < naire_questions.length; i++) {
            var type = naire_questions[i].getAttribute('data-type');
            switch (type) {
                case "input":
                    var title = naire_questions[i].querySelector('div[class="naire_item_title"]').innerText;
                    var input = naire_questions[i].querySelector('input[class="input_item"]').value;

                    var result = new InputResult(title, 1, input);
                    naire_questions_list.push(result);
                    break;
                case "radio":
                    var title = naire_questions[i].querySelector('div[class="naire_item_title"]').innerText;
                    var choice;

                    var items = naire_questions[i].querySelector('div[class="naire_item_items"]');
                    var radios = items.querySelectorAll('input[data-question-item="radio"]');
                    for (var j = 0; j < radios.length; j++) {
                        if (radios[j].checked) {
                            choice = radios[j].value;
                            break;
                        }
                    }

                    var result = new RadioReuslt(title, 2, choice);
                    naire_questions_list.push(result);
                    break;
                case "checkbox":
                    var title = naire_questions[i].querySelector('div[class="naire_item_title"]').innerText;
                    var choices = new Array();

                    var items = naire_questions[i].querySelector('div[class="naire_item_items"]');
                    var checkboxes = items.querySelectorAll('input[data-question-item="checkbox"]');
                    for (var j = 0; j < checkboxes.length; j++) {
                        if (checkboxes[j].checked) {
                            choices.push(checkboxes[j].value);
                        }
                    }

                    var result = new CheckBoxResult(title, 3, choices);
                    naire_questions_list.push(result);
                    break;
            }
        }
    }());

    //	只需要把这个naire_questions_list东西
    //  转json即可得到这份问卷数据
    console.log(naire_questions_list);
}