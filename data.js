document.getElementById('all').addEventListener('click', function () {
    document.getElementById('all').style.backgroundColor = '#FF1F3D';
    document.getElementById('all').style.color = 'white';
    document.getElementById('container').innerText='';
    const url = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
        const data_ = await res.json();
        const dataset = data_.data;
        displaydata(dataset);
    }
    url();

    displaydata = data => {
        if (data.length==0){
            const div = document.createElement('div');
            div.innerHTML = `
            <section class="w-screen">
            <div class="mx-auto "> 
                <div class="flex flex-col justify-center gap-8 " > 
                    <div>
                    <img class="mx-auto  " src="./Icon.png" alt="Please Wait">
                    </div>
                    <div>
                    <p class="text-[32px] font-bold text-center " >Oops!! Sorry, There is no <br> content here</p>
                    </div>
                </div>
            </div>
            </section>
            `;
            document.getElementById('container').appendChild(div);
        }else{
            data.forEach(element => {
            
            console.log(element);
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class="data-card flex flex-col gap-[20px]">
                        <div id=" image-time ">
                            <img class="w-[312px] h-48 rounded-lg" src="${element.thumbnail || ''}" alt="Please Wait">
                            <div id="post-date" class="hidden px-[5px] py-[4px] bg-[#171717] rounded">
                                <p id="post-time" class=" text-[10px] font-normal text-white "></p>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div><img class="rounded-full w-10 h-10" src="${element.authors[0]?.profile_picture || ''}" alt="Please Wait"></div>
                            <div class="pt-2">
                                <div class="text-xl font-bold pb-[9px]"><h3>${element.title || ''}</h3></div>
                                <div class="flex gap-[9px]">
                                    <div class="text-[16px] font-normal text-[#171717b3] pb-[2px]"><h4>${element.authors[0]?.profile_name || ''}</h4></div>
                                    <img class="w-4 h-4 mt-[5px] hidden verified" src="./fi_10629607.png">
                                </div>
                                <div class="text-[12px] font-normal text-[#171717b3] pb-[10px]">${element.others?.views || ''} views</div>
                            </div>
                        </div>
                    </div>`;
                    
            const verifiedElements = div.getElementsByClassName('verified');
            if (element.authors[0].verified) {
                    for (const verifiedElement of verifiedElements) {
                        verifiedElement.classList.remove('hidden');
                    }
            }
            // const p=document.getElementById('post-time')
            // if (element.others.posted_date.length==0){
            //     p.innerText=''
            // }else{
            //     document.getElementById('post-date').classList.remove('hidden')
            //     function formatTimeAgo(timestamp) {
            //         const hours = Math.floor(timestamp / 60);
            //         const minutes = timestamp % 60;
                
            //         if (hours > 0 && minutes > 0) {
            //             return `${hours} hrs ${minutes} min ago`;
            //         } else if (hours > 0) {
            //             return `${hours} hrs ago`;
            //         } else if (minutes > 0) {
            //             return `${minutes} min ago`;
            //         } else {
            //             return `just now`;
            //         }
            //     }
                
            //     const timestamp = element.others.posted_date; 
            //     const formattedTimeAgo = formatTimeAgo(timestamp);
            //     console.log(formattedTimeAgo); 
            //     p.innerText=formattedTimeAgo  
            // }
            document.getElementById('container').appendChild(div);
            });
                
            }             
        }
    
});
// --------------------music type---------------------
document.getElementById('music').addEventListener('click', function () {
    document.getElementById('music').style.backgroundColor = '#FF1F3D';
    document.getElementById('music').style.color = 'white';
    document.getElementById('container').innerText='';
    const url = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1001');
        const data_ = await res.json();
        const dataset = data_.data;
        displaydata(dataset);
    }
    url();

    displaydata = data => {
        if (data.length==0){
            const div = document.createElement('div');
            div.innerHTML = `
            <section class="w-screen">
            <div class="mx-auto "> 
                <div class="flex flex-col justify-center gap-8 " > 
                    <div>
                    <img class="mx-auto  " src="./Icon.png" alt="Please Wait">
                    </div>
                    <div>
                    <p class="text-[32px] font-bold text-center " >Oops!! Sorry, There is no <br> content here</p>
                    </div>
                </div>
            </div>
            </section>
            `;
            document.getElementById('container').appendChild(div);
        }else{
            data.forEach(element => {
            console.log(element);
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class="data-card flex flex-col gap-[20px]">
                        <div class=" "><img class="w-[312px] h-48 rounded-lg" src="${element.thumbnail || ''}" alt="Please Wait"></div>
                        <div class="flex gap-3">
                            <div><img class="rounded-full w-10 h-10" src="${element.authors[0]?.profile_picture || ''}" alt="Please Wait"></div>
                            <div class="pt-2">
                                <div class="text-xl font-bold pb-[9px]"><h3>${element.title || ''}</h3></div>
                                <div class="flex gap-[9px]">
                                    <div class="text-[16px] font-normal text-[#171717b3] pb-[2px]"><h4>${element.authors[0]?.profile_name || ''}</h4></div>
                                    <img class="w-4 h-4 mt-[5px] hidden verified" src="./fi_10629607.png">
                                </div>
                                <div class="text-[12px] font-normal text-[#171717b3] pb-[10px]">${element.others?.views || ''} views</div>
                            </div>
                        </div>
                    </div>`;
                    
            const verifiedElements = div.getElementsByClassName('verified');
            if (element.authors[0].verified) {
                    for (const verifiedElement of verifiedElements) {
                        verifiedElement.classList.remove('hidden');
                    }
            }
            document.getElementById('container').appendChild(div);
            });
                
            }             
        }
});
// --------------------comedy type---------------------
document.getElementById('comedy').addEventListener('click', function () {
    document.getElementById('comedy').style.backgroundColor = '#FF1F3D';
    document.getElementById('comedy').style.color = 'white';
    document.getElementById('container').innerText='';
    const url = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1003');
        const data_ = await res.json();
        const dataset = data_.data;
        displaydata(dataset);
    }
    url();

    displaydata = data => {
        if (data.length==0){
            const div = document.createElement('div');
            div.innerHTML = `
            <section class="w-screen">
            <div class="mx-auto "> 
                <div class="flex flex-col justify-center gap-8 " > 
                    <div>
                    <img class="mx-auto  " src="./Icon.png" alt="Please Wait">
                    </div>
                    <div>
                    <p class="text-[32px] font-bold text-center " >Oops!! Sorry, There is no <br> content here</p>
                    </div>
                </div>
            </div>
            </section>
            `;
            document.getElementById('container').appendChild(div);
        }else{
            data.forEach(element => {
            console.log(element);
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class="data-card flex flex-col gap-[20px]">
                        <div class=" "><img class="w-[312px] h-48 rounded-lg" src="${element.thumbnail || ''}" alt="Please Wait"></div>
                        <div class="flex gap-3">
                            <div><img class="rounded-full w-10 h-10" src="${element.authors[0]?.profile_picture || ''}" alt="Please Wait"></div>
                            <div class="pt-2">
                                <div class="text-xl font-bold pb-[9px]"><h3>${element.title || ''}</h3></div>
                                <div class="flex gap-[9px]">
                                    <div class="text-[16px] font-normal text-[#171717b3] pb-[2px]"><h4>${element.authors[0]?.profile_name || ''}</h4></div>
                                    <img class="w-4 h-4 mt-[5px] hidden verified" src="./fi_10629607.png">
                                </div>
                                <div class="text-[12px] font-normal text-[#171717b3] pb-[10px]">${element.others?.views || ''} views</div>
                            </div>
                        </div>
                    </div>`;
                    
            const verifiedElements = div.getElementsByClassName('verified');
            if (element.authors[0].verified) {
                    for (const verifiedElement of verifiedElements) {
                        verifiedElement.classList.remove('hidden');
                    }
            }
            document.getElementById('container').appendChild(div);
            });
                
            }             
        }
});
// --------------------Drawing---------------------
document.getElementById('drawing').addEventListener('click', function () {
    document.getElementById('drawing').style.backgroundColor = '#FF1F3D';
    document.getElementById('drawing').style.color = 'white';
    document.getElementById('container').innerText='';
    const url = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1005');
        const data_ = await res.json();
        const dataset = data_.data;
        displaydata(dataset);
    }
    url();
    displaydata = data => {
        if (data.length==0){
            const div = document.createElement('div');
            div.innerHTML = `
            <section class="w-screen">
            <div class="mx-auto mr-0 md:mr-[124px] lg:mr-[124px] py-10"> 
                <div class="flex flex-col justify-center gap-8 " > 
                    <div>
                    <img class="mx-auto  " src="./Icon.png" alt="Please Wait">
                    </div>
                    <div>
                    <p class="text-[18px] md:text-[28px] lg:text-[32px] font-bold text-center " >Oops!! Sorry, There is no <br> content here</p>
                    </div>
                </div>
            </div>
            </section>
            `;
            document.getElementById('container').appendChild(div);
        }else{
            data.forEach(element => {
            console.log(element);
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class="data-card flex flex-col gap-[20px]">
                        <div class=" "><img class="w-[312px] h-48 rounded-lg" src="${element.thumbnail || ''}" alt="Please Wait"></div>
                        <div class="flex gap-3">
                            <div><img class="rounded-full w-10 h-10" src="${element.authors[0]?.profile_picture || ''}" alt="Please Wait"></div>
                            <div class="pt-2">
                                <div class="text-xl font-bold pb-[9px]"><h3>${element.title || ''}</h3></div>
                                <div class="flex gap-[9px]">
                                    <div class="text-[16px] font-normal text-[#171717b3] pb-[2px]"><h4>${element.authors[0]?.profile_name || ''}</h4></div>
                                    <img class="w-4 h-4 mt-[5px] hidden verified" src="./fi_10629607.png">
                                </div>
                                <div class="text-[12px] font-normal text-[#171717b3] pb-[10px]">${element.others?.views || ''} views</div>
                            </div>
                        </div>
                    </div>`;
                    
            const verifiedElements = div.getElementsByClassName('verified');
            if (element.authors[0].verified) {
                    for (const verifiedElement of verifiedElements) {
                        verifiedElement.classList.remove('hidden');
                    }
            }
            document.getElementById('container').appendChild(div);
            });
                
            }             
        }   
    }
);
// ---------------------blog---------------------
document.getElementById('blog-button').addEventListener('click', function () { 
    window.location.href = "./blog.html";
});
// document.getElementById('exit').addEventListener('click', function () { 
//     window.location.href = "./index.html";
//     console.log('exit');
// });

