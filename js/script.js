const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const appVue = new Vue({
    el: "#app",

    data:{
        
        listCountry: slides,
        countryImage: slides[0].image,
        countryTitle: slides[0].title,
        countryText: slides[0].text,
        index:0,

    },

    methods:{
        
        downScroll:function(){
            if(this.index != 4)
            this.index ++;
            else if (this.index ===4)
            this.index = 0

            this.countryTitle = this.listCountry[this.index].title;
            this.countryImage = this.listCountry[this.index].image;
            this.countryText = this.listCountry[this.index].text;

        },

        upScroll:function(){
            if(this.index === 0)
            this.index = 4
            else if(this.index > 0)
            this.index --;

            this.countryTitle = this.listCountry[this.index].title;
            this.countryImage = this.listCountry[this.index].image;
            this.countryText = this.listCountry[this.index].text;


        },

    }
})