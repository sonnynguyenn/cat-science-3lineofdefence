let tabs = document.querySelectorAll('.tab');
let firstLineContent = document.querySelector("#first-line > .content-contain > .content");
const FIRST_LINE_CONTENTS = [
	{
		title: "Mucus",
		type: "Physical barrier",
		content: " Mucus is a <b>sticky substance that traps invading cells</b>, once the cells are trapped, the body’s immune system can kill them or prevent them from spreading. Mucus also <b>contains special sugar molecules that can stop bacteria from communicating with each other and forming groups</b>, making them harmless.",
		imageURL: "https://stileapp.com/uploads/au/T20200114-8d54874564aeb8f268c719ee16d9ff331ccb9234ad6d92f6ec6d1a/AdobeStock_274616006.jpeg-websafe?response-content-disposition=inline;%20filename=%22AdobeStock_274616006.jpeg-websafe%22&AWSAccessKeyId=AKIAIPQWMHPPERLPVN5Q&Expires=1690794000&Signature=4fvFOOXxQXTE0DkUSP6uVjiYY7s%3D"
	},
	{
		title: "Tears",
		content: "Tears are the liquid that is <b>produced by the lacrimal glands in the eyes</b>, help prevent pathogens from entering the body through their <b>antimicrobial properties,and flushing action</b>. Tears <b>contain lysozyme, an enzyme that can break down the cell walls of certain bacteria</b>, providing a protective antimicrobial effect. <b>The blinking action spreads tears over the surface of the eye, helping to wash away pathogens.</b>",
		type: "Physical and chemical barrier",
		imageURL: "https://www.verywellhealth.com/thmb/BKvoQy7MR4CjTkTrk_hxv1u6ASw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tear-falling-from-woman-s-eye--close-up-200239461-001-59da598a6f53ba001044eb61.jpg"
	},
	{
		title: "Saliva",
		content: "Saliva <b>helps to fight pathogens in your mouth and keep it clean</b>. It <b>contains secrete that can kill bacteria and prevent them from settling in your mouth</b>. This helps to maintain a healthy balance of microorganisms in your mouth and prevent them infecting the body.",
		type: "Physical and chemial barrier",
		imageURL: "https://www.goldenvalleypediatricdentist.com/wp-content/uploads/2020/10/baby.jpg"
	},
	{
		title: "Skin",
		content: "Skins are the </b>outer layer of body</b> that can <b>prevent the intrusion of pathogens</b>. When the skin is cut or scratched, the body starts by <b>forming a clot to stop bleeding. Specialized cells create new tissue called <b>granulation tissue</b>. Skin cells migrate to cover the wound. Over time, the wound is repaired.</b>",
		imageURL: "https://media.allure.com/photos/5bda231bf80f9a2d4b070155/16:9/w_2560%2Cc_limit/keratosis-pilaris-bumps-lede.jpg",
		type: "Physical barrier"
	},
	{
		title: "Cilia",
		content: "Cilia is <b>microscopic hair the lines on the airways</b>. When debris or potential dangerous materials enter the airways, the <b>cilia trap them, then the body cough as a reflex and push the them outside.</b>",
		imageURL: "https://upload.wikimedia.org/wikipedia/commons/3/39/Bronchiolar_epithelium_3_-_SEM.jpg",
		type: "Physical barrier"
	},
	{
		title: "Stomach acid",
		content: "Stomach contains <b>hydrochloric acid</b> (HCl), the acid plays an <b>important role in digesting food</b> and they also <b>kill many pathogens to protect body from infection.</b>",
		imageURL: "https://c8.alamy.com/comp/2C782XR/vector-medical-illustration-about-acid-in-stomach-stomach-acid-reflux-gastric-acid-2C782XR.jpg",
		type:"Chemical barrier"
	},
	{
		title: "Urine flow",
		content: "The urine is <b>produced from the kidneys cleaning waste in the blood</b>, the <b>flush action and wash away pathogens on the urinary tract. </b>",
		imageURL: "https://www.besturologistnyc.com/wp-content/uploads/2019/02/urologist-for-slow-urine-flow-urination-info-01.jpeg",
		type:"Physcial barrier"
	}
]
FIRST_LINE_CONTENTS.map(content=>{
	firstLineContent.innerHTML += `<div class="element"><h3>${content.title} <span>#${content.type}</span></h3><article>${content.content}</article><div id="el-img">${content.imageURL!=undefined&&content.imageURL!=""?`<img src="${content.imageURL}">`:""}</div></div>`;	
})

for(let tab of tabs){
	tab.onclick = (e)=>{
		tab.parentNode.classList.toggle("opening");	
		tab.parentNode.classList.remove("unopened");
	}
}
