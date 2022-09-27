
const getGp = m => {
    if(m >= 90 && m <= 100) return 4;
    else if(m >= 85 && m <= 89) return 4;
    else if(m >= 80 && m <= 84) return 3.8;
    else if(m >= 75 && m <= 79) return 3.4;
    else if(m >= 71 && m <= 74) return 3;
    else if(m >= 68 && m <= 70) return 2.8;
    else if(m >= 64 && m <= 67) return 2.4;
    else if(m >= 61 && m <= 63) return 2;
    else if(m >= 57 && m <= 60) return 1.8;
    else if(m >= 53 && m <= 56) return 1.4;
    else if(m >= 45 && m <= 52) return 1;
    else return 0;
}

export default getGp