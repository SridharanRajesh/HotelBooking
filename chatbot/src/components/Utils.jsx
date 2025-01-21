import moment from 'moment'
export const analyze = (text) => {
    if(text.includes('hi')||text.includes('hai')||text.includes('hello'))
        return 'Hi, How can i help you?'
    else if(text.includes('date'))
        return moment().format('MMMM Do YYYY')
    else if(text.includes('time'))
        return moment().format('HH:MM:ss a')
    else if(text.includes('github link'))
        return 'www.github.com/SridharanRajesh/'
    else if(text.includes('thank you'))
        return 'Thanks for Contacting Me'
    return "I can't get you. Can you rephrase the message"
}