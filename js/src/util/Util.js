export const getHeaderLineitem = () =>{
    return {
        fromMailIds: 'From',
        toMailIds: 'To',
        mailSubject: 'Subject',
        date: 'Date',
        time: 'Time'
    }
}

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

export const getDate = (dateObj, format) =>{
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
        finalDateObj['dateStr'] = finalDateObj.year + '-' + finalDateObj.month + '-' + finalDateObj.day;
    }    
    return finalDateObj;
}

export const sortLineItems = (lineItems,type,order) =>{
    lineItems.sort((a,b) => {
        let itemA, itemB;

        if(type === 'date'){
            let dateItemA = a.date.split('/');
            let timeItemA = a.time;
            let yearA = dateItemA[0];
            let monthA = getMonthName(dateItemA[1]);
            let dayA = dateItemA[2];
            itemA = new Date(dayA + '/' + monthA + '/' + yearA + ' ' + timeItemA);

            let dateItemB = b.date.split('/');
            let timeItemB = b.time;
            let yearB = dateItemB[0];
            let monthB = getMonthName(dateItemB[1]);
            let dayB = dateItemB[2];
            itemB = new Date(dayB + '/' + monthB + '/' + yearB + ' ' + timeItemB);
        }else{
            itemA = a.fromMailIds;
            itemB = b.fromMailIds;
        }  

        if(order === 'asc'){
            if (itemA > itemB) return 1;
            if (itemA < itemB) return -1;
            return 0;
        }else{
            if (itemA > itemB) return -1;
            if (itemA < itemB) return 1;
            return 0;
        }
    });

    return lineItems;
}

export const sortByDate = (lineItems, order) =>{
    let currentDayItems =[];
    let currentMonthItems = [];
    let otherItems = [];

    lineItems.forEach((lineItem) =>{
        if(lineItem.currentDay){
            currentDayItems.push(lineItem);
        }else if(lineItem.currentMonth){
            currentMonthItems.push(lineItem);
        }else{
            otherItems.push(lineItem);
        }
    });

    currentDayItems = sortLineItems(currentDayItems,'date',order);
    currentMonthItems = sortLineItems(currentMonthItems,'date',order);
    otherItems = sortLineItems(otherItems,'date',order);

    if(order === 'asc'){
        lineItems = [...currentDayItems,...currentMonthItems,...otherItems];
    }else{
        lineItems = [...otherItems,...currentMonthItems,...currentDayItems];
    }
    
    return lineItems;
}