$(document).ready(function(){
    var url = window.location.pathname;
	var tit = $('.area_loc .floc01 h1');
	var nav1 = $('.area_loc .floc01 .fnav dl.client');
	var nav2 = $('.area_loc .floc01 .fnav dl.role');

    if(url == ('/detail/detail1.html')) { /* 스토리비전 */ 
		document.title = "IOUSOLUTION - Story Vision";
	} else if (url == ('/detail/detail2.html')) { /* 한국폰트협회 */
		document.title = "IOUSOLUTION - Korea Font Association";
	} else if (url == ('/detail/detail3.html')) { /* 아이티교육알앤디협동조합 */
		document.title = "IOUSOLUTION - IT Education R&D Cooperative";
	} else if (url == ('/detail/detail4.html')) { /* 그라운드고척2018 */
		document.title = "IOUSOLUTION - 2018 Campus Town Business";
	} else if (url == ('/detail/detail5.html')) { /* 그라운드고척2019*/
		document.title = "IOUSOLUTION - 2019 Campus Town Business";
	} else if (url == ('/detail/detail6.html')) { /* 구구펀 */
		document.title = "IOUSOLUTION - Googoofun";
	} else if (url == ('/detail/detail7.html')) { /* 에너지바우처 */
		document.title = "IOUSOLUTION - 에너지바우처웹접근성인증";
	} else if (url == ('/detail/detail8.html')) { /* 온품 */
		document.title = "IOUSOLUTION - Earthquake Layer Monitoring System";
	} /* 타이틀 */ else if (url == ('/contact.html')) {
		document.title = "IOUSOLUTION - 문의하기" ;
	} else if (url == ('/news.html')) {
		document.title = "IOUSOLUTION - 공지사항" ;
	} else if (url == ('/about.html')) {
		document.title = "IOUSOLUTION - 회사소개" ;
	}
});