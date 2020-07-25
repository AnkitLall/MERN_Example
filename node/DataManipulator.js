var express = require('express');
var router = express.Router();

let data = [
    {'from': 'aaa@example.com', 'to': ['zzz.zzz@example.com','yyy@example.com','yyy@example.com','yyy@example.com','yyy@example.com','yyy@example.com'], 'subject': '[ HR-888 ] Notice of official announcement', 'date': '2020/7/9', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'bbb.bbbb@example.com', 'to': ['yyy@example.com'], 'subject': '[web:333] "Web Contact"', 'date': '2020/7/9', 'time': '0:10','attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'ccc@example.com', 'to': ['xxx@example.com'], 'subject': 'Happy New Year! Greetings for the New Year', 'date': '2020/7/9', 'time': '0:00', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'ddd.dddd@example.com', 'to': ['vvv.vvv@example.com'], 'subject': '[HR-887(Revised: Office Expansion Project Team)] Notice of office', 'date': '2020/5/5', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'eee@example.com', 'to': ['sss@example.com'], 'subject': '[Github] Logout page', 'date': '2020/5/6', 'time': '0:30', 'attachment': false, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'aaa@example.com', 'to': ['zzz.zzz@example.com'], 'subject': '[ HR-888 ] Notice of official announcement', 'date': '2020/7/8', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'aaa@example.com', 'to': ['zzz.zzz@example.com'], 'subject': '[ HR-888 ] Notice of official announcement', 'date': '2020/7/8', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'aaa@example.com', 'to': ['zzz.zzz@example.com'], 'subject': '[ HR-888 ] Notice of official announcement', 'date': '2020/7/8', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'bbb.bbbb@example.com', 'to': ['yyy@example.com'], 'subject': '[web:333] "Web Contact"', 'date': '2020/5/8', 'time': '0:10','attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'ccc@example.com', 'to': ['xxx@example.com'], 'subject': 'Happy New Year! Greetings for the New Year', 'date': '2020/5/5', 'time': '0:00', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'ddd.dddd@example.com', 'to': ['vvv.vvv@example.com'], 'subject': '[HR-887(Revised: Office Expansion Project Team)] Notice of office', 'date': '2020/5/7', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'eee@example.com', 'to': ['sss@example.com'], 'subject': '[Github] Logout page', 'date': '2020/5/8', 'time': '0:30', 'attachment': false, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'aaa@example.com', 'to': ['zzz.zzz@example.com'], 'subject': '[ HR-888 ] Notice of official announcement', 'date': '2020/7/5', 'time': '0:30', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {'from': 'aaa@example.com', 'to': ['zzz.zzz@example.com'], 'subject': '[ HR-888 ] Notice of official announcement', 'date': '2020/7/5', 'time': '0:20', 'attachment': true, 'body': 'Hi xyz,\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},

];

const getMonthNumber = (month) =>{
    switch(month){
        case 'Jan':
            return 1;
        case 'Feb':
            return 2;
        case 'Mar':
            return 3;
        case 'Apr':
            return 4;
        case 'May':
            return 5;
        case 'Jun':
            return 6;
        case 'Jul':
            return 7;
        case 'Aug':
            return 8;
        case 'Sep':
            return 9;
        case 'Oct':
            return 10;
        case 'Nov':
            return 11;
        case 'Dec':
            return 12;
    }
}

const getMonthName = (month) =>{
    switch(month){
        case '1':
            return 'Jan';
        case '2':
            return 'Feb';
        case '3':
            return 'Mar';
        case '4':
            return 'Apr';
        case '5':
            return 'May';
        case '6':
            return 'Jun';
        case '7':
            return 'Jul';
        case '8':
            return 'Aug';
        case '9':
            return 'Sep';
        case '10':
            return 'Oct';
        case '11':
            return 'Nov';
        case '12':
            return 'Dec';
    }
}

const getDate = (dateObj, format) =>{
    let date;
    if(dateObj){
        date = dateObj;
    }else{
        date = new Date();       
    }

    date = String(date);

    let year = date.split(' ')[3];
    let month = getMonthNumber(date.split(' ')[1]);
    let day = date.split(' ')[2];

    if(day[0] === '0'){
        day = day[1];
    }

    let finalDateObj = {
        year: year,
        month: month,
        day: day
    }

    if(format === 'm dd'){
        finalDateObj['dateStr'] =  date.split(' ')[1] + ' ' + finalDateObj.day;
    }else{
        finalDateObj['dateStr'] = finalDateObj.year + '/' + finalDateObj.month + '/' + finalDateObj.day;
    }    
    return finalDateObj;
}

const getData = (startDate, endDate) =>{   
     
    let filteredData = [];
    data.forEach((lineItem) =>{
        let mailInfo = {};
        let date = new Date(lineItem.date).getTime();
        let fromDate = new Date(startDate).getTime();
        let toDate = new Date(endDate).getTime();
        if(date >= fromDate && date <= toDate){
            let todayObj = getDate();
            let today = new Date(todayObj.dateStr).getTime();
            if(date === today){
                mailInfo['currentDay'] = true;
            }

            let currentMonth = new Date(todayObj.dateStr).getMonth();
            let lineItemMonth = new Date(lineItem.date).getMonth();
            if(lineItemMonth === currentMonth){
                mailInfo['currentMonth'] = true;
                mailInfo['monthDateFormat'] = getDate(new Date(lineItem.date),'m dd');
            }

            mailInfo['numToMails'] = lineItem.to.length;
            let mailIds = '';
            lineItem.to.forEach((mailId,idx) =>{
                mailIds += mailId;
                if(lineItem.to[idx+1]){
                    mailIds += ', ';
                }
            });

            mailInfo['toMailIds'] = mailIds;
            mailInfo['fromMailIds'] = lineItem.from;
            mailInfo['mailBody'] = lineItem.body;
            mailInfo['mailSubject'] = lineItem.subject;
            mailInfo['date'] = lineItem.date;
            mailInfo['time'] = lineItem.time;
            mailInfo['attachmentFileExist'] = lineItem.attachment;

            filteredData.push(mailInfo);
        }        
    });  
    
    return filteredData;
}

router.get('/:startDate/:endDate',function(req,res) {
    let startDate = req.params.startDate.replace(/-/g,'/');
    let endDate = req.params.endDate.replace(/-/g,'/');
    let finalData = getData(startDate,endDate);
    res.json(finalData);
});

module.exports = router;