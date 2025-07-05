class TrendingSong{
  id;
  img;
  songName;
  artistName;
  audio;
  constructor(id,img,songName,artistName,audio){
    this.id=id
    this.img=img;
    this.songName=songName;
    this.artistName=artistName;
    this.audio=audio;
  }
}

const song1= new TrendingSong('1',"images/Sahiba.jpeg",'Sahiba','Aditya Rikhari',"songs/Sahiba.mp3")
const song2=new TrendingSong('2',"images/At Peace.jpeg",'At Peace','KaranAujla,Ikky',"songs/SpotiDown.App - At Peace - Karan Aujla.mp3")
const song3=new TrendingSong('3',"images/Dhun.jpeg",'Dhun (From "Saiyaara")','Mithoon,Arjit Singh',"songs/SpotiDown.App - Dhun _From _Saiyaara__ - Mithoon.mp3")
const song4=new TrendingSong('4',"images/Shoes Off.jpeg",'Shoes Off','Prem Dhillon,iqbal,The Kidd',"songs/SpotiDown.App - Shoes Off - Prem Dhillon.mp3")
const song5=new TrendingSong('5',"images/Qayde Se.jpeg",'Qayde Se (From "Metro ... In Dino")','Pritam,Arijit Singh,Amitabh Bhattacharya','songs/SpotiDown.App - Qayde Se _From _Metro ... In Dino__ - Pritam.mp3')
const song6=new TrendingSong('6',"images/Saiyaara.jpeg",'Saiyaara (From "Saiyaara")','Tanishk Bagchi,Faheem, Abdullah,Arslan','songs/SpotiDown.App - Saiyaara _From _Saiyaara__ - Tanishk Bagchi.mp3')
const song7=new TrendingSong('7',"images/Gulabi Aankhen.jpeg",'Gulabi Aankhen','Sanam','songs/SpotiDown.App - Gulabi Aankhen - Sanam.mp3')
const song8=new TrendingSong('8',"images/Ishq bawla.jpeg",'Ishq Bawla | Coke Studio Bharat','Dhanda Nyoliwala,Xvir Grewal','songs/SpotiDown.App - Ishq Bawla _ Coke Studio Bharat - Dhanda Nyoliwala.mp3')
const song9=new TrendingSong('9',"images/Lose My Mind.jpeg",'Lose My Mind (feat. Doja Cat) [From F1® The Movie]','Don Toliver,Doja Cat,F1 The Album','songs/SpotiDown.App - Lose My Mind _feat. Doja Cat_ _From F1_ The Movie_ - Don Toliver.mp3')
const song10=new TrendingSong('10',"images/Chikitu .jpeg",'Chikitu (From "Coolie") (Tamil)','Anirudh Ravichander,T.rajender,Arivu',"songs/SpotiDown.App - Chikitu _From _Coolie__ _Tamil_ - Anirudh Ravichander.mp3")
const song11=new TrendingSong('11',"images/Just Keep Watching.jpeg",'Just Keep Watching (From F1® The Movie)','Tate McRae,F1 The Album','songs/SpotiDown.App - Just Keep Watching _From F1_ The Movie_ - Tate McRae.mp3')
const song12=new TrendingSong('12',"images/Mafia.jpeg",'Mafia','Nickox,D Hell,Young Jerich','songs/SpotiDown.App - Mafia - Nickox.mp3')
const song13=new TrendingSong('13',"images/Raat Ke Shikari.jpeg",'Raat Ke Shikari','Masoom Sharma,Sweta Chauhan,Yash Thukral','songs/SpotiDown.App - Raat Ke Shikari - Masoom Sharma.mp3')
const song14=new TrendingSong('14',"images/Mila Tujhe.jpeg",`Mila Tujhe - From "Aap Jaisa Koi"`,'Vishal Mishra,Prateeksha Srivastava','songs/SpotiDown.App - Mila Tujhe - From _Aap Jaisa Koi_ - Vishal Mishra.mp3')
const song15=new TrendingSong('15',"images/High On You.jpeg",'High On You','Jind Universe','songs/SpotiDown.App - High On You - Jind Universe.mp3')
const song16=new TrendingSong('16',"images/Ehsaas.jpeg",'Ehsaas','Faheem Abdullah,Duha Shah,Vaibhav Pani',"songs/SpotiDown.App - Ehsaas - Faheem Abdullah.mp3")
const song17=new TrendingSong('17',"images/Naam Chale.jpeg",'Naam Chale','Vikram Sarkar','songs/SpotiDown.App - Naam Chale - Vikram Sarkar.mp3')
const song18=new TrendingSong('18',"images/Last Love.jpeg",'Last Love','Kushagra,Bharath','songs/SpotiDown.App - Last Love - Kushagra.mp3')
const song19=new TrendingSong('19',"images/Jhol.jpeg",'Jhol','Rifat Karim','songs/SpotiDown.App - Jhol - Rifat Karim.mp3')
const song20=new TrendingSong('20',"images/Golden.jpeg",'Golden','HUNTR/X,EJAE,AUDREY NUNA,REI AMI','songs/SpotiDown.App - Golden - HUNTR_X.mp3')



export let trendingSong = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16,song17,song18,song19,song20]