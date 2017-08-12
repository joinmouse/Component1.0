
function Tab(ct){
    this.ct = ct
    this.init();
    this.bind();
}

Tab.prototype.init = function(){
    this.tabLis = this.ct.querySelectorAll('.tab-header>li')
    this.tabPanels = this.ct.querySelectorAll('.tab-content>section')
    console.log(this.tabLis)
}

Tab.prototype.bind = function(){
    var that = this;
    this.tabLis.forEach(function(tabli){
        tabli.onclick = function(e) {
            var target = e.target;
            var index = [].indexOf.call(that.tabLis,target);
            console.log(index);
            //移除tab-header中li元素中所有class为active
            that.tabLis.forEach(function(li){
            li.classList.remove('active')
            })
            target.classList.add('active');
            
            //移除tab-content中li元素中所有class为active
            that.tabPanels.forEach(function(panel){
            panel.classList.remove('active')
            })
            that.tabPanels[index].classList.add('active');
        }
    })
}

new Tab(document.querySelectorAll('.tab'))