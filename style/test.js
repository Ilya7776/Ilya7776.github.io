$(function() {
        var btn = $(".btn"), block = $(".box");

        $(document).click(function(event) {
                var target = $(event.target),cur;
                if (target.is(".btn")) {
                       event.preventDefault();
                       var index = btn.index(target);
                       cur = block.eq(index).slideToggle();
                       target.toggleClass("open")
                 }
                if (target.closest(".box").length) return;
                block.not(cur).slideUp("slow");
                btn.not(target).removeClass("open")
        })
});
