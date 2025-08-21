*{
    padding: 0;margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
}
a{color: black;}

ul li{list-style: none;}

body{width:100%;}

/* Header start-- */
header{
    height:100px;
    width:100%;
    position:fixed;
    margin-top:-100px;
}
header .wrapper{
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
header .wrapper h1 a{
    font-family: "Poppins", sans-serif;
    font-size:28px;
    font-weight: 700;
}
header .wrapper ul{
    display: flex;
    height: 50px;
    width:550px;
    border: 2px solid black;   
    border-radius: 24px;
    align-items: center;
    padding-left: 50px;
}
header .wrapper ul li{
    margin-right: 40px;
    font-weight:600; 
}
header .wrapper div{
    height: 70px;
    width: 70px;
    border-radius:50%;
}
header .wrapper div img{
    height: 70px;
    width: 70px;
    border-radius:50%;
    background-size: cover;
}
/* header end // */

/* main container start-- */
.main-cnt{
    width: 100%;
    height: 690px;
    padding-top: -50px; 
    margin-top: 100px; 
}
.wrapper{
    width: 80%;
    margin: 0 auto;
}
/* main container end// */

/* Home page start-- */
/* Home page right container start-- */
.right-cnt{
    width: 50%;
    height: 690px;
    float: right;
}
.card{
    margin-top: 20px;
}
.card img{
    width: 100%;
    height: 580px;
    border-radius:35px;
    object-fit: cover;
}
.card button{
    position: absolute;
    height: 60px;
    width: 180px;
    border-radius:34px;
    border: transparent;
    margin-left: -620px;
    margin-top: 500px;
}
.card button a{
    font-weight:bold;
    font-size:14px;
    word-spacing: 2px;
}
.card h1{
    position: absolute;
    margin-top: -130px;
    margin-left:20px;
}
.card h3{
    position: absolute;
    margin-top: -150px;
    margin-left:20px;
}

/* Home page right container end// */


/* Home page left container  start-- */
.left-cnt{
    width: 50%;
    height: 690px;
}
.content-hm{
    padding-top: 30px;
}
.content-hm h1{
    font-size:44px;
    font-weight:600;
}
.content-hm h3{
    font-size:28px;
    font-weight:500;
    margin-top:-10px;
}
.content-hm p{
    font-size:18px;
    font-weight:500;
    margin-top:20px;
}
.content-hm button{
    height: 50px;
    width: 150px;
    border-radius:34px;
    border: transparent;
    background-color: black;
    margin-top: 40px;
}
.content-hm button a{
    color: white;
    font-size:16px;
}

/* Home  social media start-- */

.socialmedia{
    width: 100%;
    height:150px;
    margin-top: 150px;
    padding-top: 90px;
    display: flex;
}
.instagram {
    height: 60px;
    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    align-content: center;
    padding-left: 8px;
    padding-top:5px;
}
.instagram img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.facebook{
    height: 60px;
    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    align-content: center;
    padding-left: 8px;
    padding-top:5px; 
}
.facebook img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.twitter{
    height: 60px;
    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    align-content: center;
    padding-left: 8px;
    padding-top:5px; 
}
.twitter img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

/* Home page end// */

/* Product page start-- */
/* products page content start-- */
.produts-content{
    width:100%;
    height:150px;
    padding-top: 20px;

}
.produts-content h1{
    line-height:35px;
    font-weight:600;
}

/* products page list start-- */

.itemlist{
    width:100%;
    height:150px;
    display: flex;
    position: relative;
    align-items: center;
    padding-top: 60px;
    justify-content: center;

}
.itemlist ul {
    display: flex;
    
}
.itemlist li{
    display: flex;
    height: 60px;
    width: 200px;
    margin-left: 20px;
    align-items: center;
    padding-left: 50px;
    border-radius:34px;
    border:1px solid black;
    opacity: 70%;
}
.itemlist li:first-child{
    display: flex;
    height: 60px;
    width: 200px;
    margin-left: 20px;
    align-items: center;
    padding-left: 50px;
    border-radius:34px;
    border:3px solid black;
}
.itemlist li:nth-child(3){
    display: flex;
    height: 60px;
    width: 200px;
    margin-left: 20px;
    align-items: center;
    padding-left: 70px;
    border-radius:34px;
    opacity: 70%;
    border:1px solid black;
}

.left-arrow{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: gray;
}
.right-arrow{
    height: 70px;
    width: 70px;
    margin-left: 40px;
    border-radius: 50%;
    background-color: gray;
}
/* products page content end// */
/* product page container start-- */
.product-images{
    width:100%;
    height:350px;
}

.product-cntright{
    width:33%;
    height:350px;
    float:right;
}

.product-cntmiddle{
    width:33%;
    height:350px;
    float:right;
}

.product-cntleft{
    width:34%;
    height:350px;
    
}
/* product page container end// */
/* product page image start// */

/* product left image start */
.prdct-img1{
    height: 340px;
    width: 98%;
    margin-top:10px;
    border-radius: 24px;
    float: right;
    background-size: cover;
}
.prdct-1h1{
    position: absolute;
    margin-left: 120px;
    margin-top:250px;
    color: white;
}
.prdct-1h3{
    position: absolute;
    margin-left: 95px;
    margin-top:288px;
    color: white;
    font-size: 16px;
    font-weight: 500;
}
/* product middle image start */
.prdct-img2{
    height: 340px;
    width: 100%;
    margin-top:10px;
    border-radius: 24px;
    background-size: cover;
    
}
.prdct-2h1{
    position: absolute;
    margin-left: 100px;
    margin-top:-100px;
    color:white;
}

.prdct-2h3{
    position: absolute;
    margin-left:85px;
    margin-top:-65px;
    color:white;
    font-size: 16px;
    font-weight: 500;
}

/* product left image start */
.prdct-img3{
    height: 340px;
    margin-top:10px;
    border-radius: 24px;
    width: 98%;
    float: left;
    
}
.prdct-3h1{
    position: absolute;
    margin-left: 50px;
    margin-top:260px;
    color: white;
    font-size:24px;
}
.prdct-3h3{
    position: absolute;
    margin-left: 105px;
    margin-top:288px;
    color: white;
    font-size: 16px;
    font-weight: 500
}

/* product page end//  */

/* collection start-- */
/* collection containers start-- */
.collection-rightcnt{
    width: 25%;
    height: 690px;
    float: right;
}
.collection-middlecnt{
    width: 25%;
    height: 690px;
    float: right;
}
.collection-leftcnt{
    width: 25%;
    height: 690px;
    float: right;
}
.collection-content{
    width: 25%;
    height: 690px;
}
/* collection container end// */

/* collection images start-- */
/* collection right side images start-- */
.office-furniture{
    height: 350px;
    width: 98%;
    margin-top: 20px;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.office-furniture-btn{
    height: 40px;
    width: 160px;
    color: white;
    border: 2px solid white;
    border-radius:34px;
    position: absolute;
    margin-top: 310px;
    margin-left: 20px;
    background-color:transparent;
}
.gaming-furniture{
    height: 250px;
    width: 98%;
    margin-top: 20px;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.gaming-furniture-btn{
    height: 40px;
    width: 160px;
    color: white;
    border: 2px solid white;
    border-radius:34px;
    position: absolute;
    margin-top: 580px;
    margin-left: 20px;
    background-color:transparent;
}
/* collection right side images end-- */
/* collection middle images start-- */
.bedroom{
    height: 250px;
    width: 98%;
    margin-top: 20px;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.bedroom-btn{
    height: 40px;
    width: 160px;
    color: white;
    border: 2px solid white;
    border-radius:34px;
    position: absolute;
    margin-top: 210px;
    margin-left: 20px;
    background-color:transparent;
}
.diningtable{
    height: 350px;
    width: 98%;
    margin-top: 20px;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.diningtable-btn{
    height: 40px;
    width: 160px;
    color: white;
    border: 2px solid white;
    border-radius:34px;
    position: absolute;
    margin-top: 580px;
    margin-left: 20px;
    background-color:transparent;
}
/* collection middle images end// */
/* collection left side images start-- */
.recliner{
    height: 350px;
    width: 98%;
    margin-top: 20px;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.recliner-btn{
    height: 40px;
    width: 160px;
    color: white;
    border: 2px solid white;
    border-radius:34px;
    position: absolute;
    margin-top: 310px;
    margin-left: 20px;
    background-color:transparent;
}
.decor{
    height: 250px;
    width: 98%;
    margin-top: 20px;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.decor-btn{
    height: 40px;
    width: 160px;
    color: white;
    border: 2px solid white;
    border-radius:34px;
    position: absolute;
    margin-top: 580px;
    margin-left: 20px;
    background-color:transparent;
}
/* collection left side images end// */
/* collection content start */

.collection-content{
    padding-top: 20px;
}
.collection-content h1{
    font-size:34px;
    font-weight:600;
}

.collection-content h3{
    font-size:26px;
    font-weight:500;
    margin-top: -5px;
}
/* Collection end-- */

/* About us start-- */
/* About us page containers */
.ab-rightcnt{
    width: 33%;
    height: 690px;
    float: right;
}

.ab-middlecnt{
    width: 33%;
    height: 690px;
    float: right;
}

.ab-leftcnt{
    width: 34%;
    height: 690px;
    padding-top: 20px;
    
}
/* about us page containers ends// */
/* about us images start-- */
.first-largeimg img{
    margin-top: 20px;
    height: 400px;
    width: 98%;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.first-smallimg img{
    margin-top: 10px;
    height: 180px;
    width: 98%;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.second-smallimg img{
    margin-top: 20px;
    height: 180px;
    width: 98%;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
.second-largeimg img{
    margin-top: 10px;
    height: 400px;
    width: 98%;
    border-radius: 40px;
    object-fit: cover;
    float: right;
}
/* about us images ends//*/
/* about us contents start-- */
.ab-leftcnt h1{
    font-size:44px;
    font-weight:600;
}
.ab-leftcnt p{
    font-size:18px;
    font-weight:500;
    margin-top:20px;
}
/* about us ends here */

/* contact us starts here */
/* contact us right side contents */
.cntct-right-cnt{
    width: 50%;
    height: 690px;
    float: right;
    padding-top: 20px;
    
}
.cntct-right-cnt h1{
    font-size:44px;
    font-weight:600;
    margin-left:30px;
}
.cntct-right-cnt p{
    font-size:18px;
    font-weight:500;
    margin-top:-10px;
    margin-left:33px;
}

/* form start */

form{
    float: right;
    margin-top: 10px;
}
 
.first-name{
    height:50px;
    width: 400px;
    border-radius: 12px;
    border:1px solid black;
    padding-left: 10px;
    font-size:14px;
}
.full-name{
    height:50px;
    width: 200px;
    border-radius: 12px;
    border:1px solid black;
    margin-left:5px;
    padding-left: 10px;
    font-size:14px;
}
.email{
    height:50px;
    width: 608px;
    border-radius: 12px;
    border:1px solid black;
    margin-top: 10px;
    padding-left: 10px;
    font-size:14px;
}

.subject{
    height:50px;
    width: 608px;
    border-radius: 12px;
    border:1px solid black;
    margin-top: 10px;
    padding-left: 10px;
    font-size:14px;
}
.message{
    height: 150px;
    width: 608px;
    border-radius: 12px;
    border:1px solid black;
    margin-top: 10px;
    padding-bottom: 100px;
    padding-left: 10px;
    font-size:14px;
}
.send{
    float: right;
    height: 60px;
    width:140px;
    color: white;
    font-size: 16px;
    font-weight:500;
    border: transparent;
    border-radius: 12px;
    margin-top: 10px;
    background-color: black;

}
/* form end */
/* contact us left contents */
.cntct-left-cnt{
    width: 50%;
    height: 690px;
}
.content-cntct{
    padding-top: 20px;
}
.content-cntct h1{
    font-size:44px;
    font-weight:600;   
}
.content-cntct p{
    font-size:18px;
    font-weight:500;
    margin-top: 20px;
}
/* conatact page social media start-- */

.socialmedia-cntct{
    width: 100%;
    height:190px;
    margin-top: 140px;
    padding-top: 90px;
    display: flex;
}
.instagram-cntct{
    height: 60px;
    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    margin-top:40px;
    margin-right: 10px;
    position: relative;
    align-content: center;
    padding-left: 8px;
    padding-top:5px;
}
.instagram-cntct img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;

}
.facebook-cntct{
    height: 60px;
    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    margin-top:40px;
    margin-right: 10px;
    position: relative;
    align-content: center;
    padding-left: 8px;
    padding-top:5px;
}
.facebook-cntct img{ 
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.twitter-cntct{
    height: 60px;
    width: 60px;
    border: 2px solid black;
    border-radius: 50%;
    margin-top:40px;
    margin-right: 10px;
    position: relative;
    align-content: center;
    padding-left: 8px;
    padding-top:5px;
}
.twitter-cntct img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.main{
    height: 1px; width: 20px;
}

/* conatact page social media end */
/* contact us end// */

/* website completed */