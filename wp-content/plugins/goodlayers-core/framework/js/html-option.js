!function(a){"use strict";a(document).ready(function(){a(".gdlr-core-page-option-content").each(function(){var b=a(this).siblings(".gdlr-core-page-option-value"),c=new gdlrCoreHtmlOption(a(this));a("#post-preview, #publish, #save-post").click(function(){b.val(JSON.stringify(c.get_val()))});var d=a(this).find("#gdlr-core-page-option-tab-head"),e=a(this).find("#gdlr-core-page-option-tab-content");d.children(".gdlr-core-page-option-tab-head-item").click(function(){if(!a(this).hasClass("gdlr-core-active")){var b=a(this).attr("data-tab-slug");a(this).addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active"),e.find('[data-tab-slug="'+b+'"]').fadeIn(200).siblings().css("display","none")}})})})}(jQuery),function(a){"use strict";window.gdlrCoreHtmlOption=function(b){this.container=a(b),this.init()},gdlrCoreHtmlOption.prototype={init:function(){this.bind_input_format(),this.bind_image_uploader(),this.bind_font_picker(),this.bind_icon_selector(),this.bind_conditional(),this.rebind()},rebind:function(){var i=this;i.container.find(".gdlr-core-html-option-colorpicker").wpColorPicker(),i.init_conditional(),i.bind_tinymce(),i.bind_font_slider(),i.bind_import(),i.bind_export(),i.bind_datepicker(),i.container.find('[data-type="custom"]').each(function(){var i=a(this).children(".gdlr-core-html-option-custom-value").data("value"),j=a(this).children(".gdlr-core-html-option-custom-options").data("value");i&&a(this).data("value",i),j&&a(this).data("options",j),a(this).is('[data-item-type="skin-settings"]')?new c(a(this)):a(this).is('[data-item-type="fontupload"]')?new h(a(this)):a(this).is('[data-item-type="thumbnail-sizing"]')?new g(a(this)):a(this).is('[data-item-type="tabs"]')?new f(a(this)):a(this).is('[data-item-type="gallery"]')?new d(a(this)):a(this).is('[data-item-type="padding"]')?new b(a(this)):a(this).is('[data-item-type="key-value"]')&&new e(a(this))})},get_val:function(){var b={};return this.container.find("[data-slug]").each(function(){var c=a(this).attr("data-slug"),d=a(this).attr("data-type");if("text"==d||"textarea"==d||"combobox"==d||"upload"==d||"colorpicker"==d||"font"==d||"multi-combobox"==d)b[c]=a(this).val();else if("checkbox"==d)b[c]=a(this).is(":checked")?"enable":"disable";else if("radioimage"==d)a(this).is(":checked")&&(b[c]=a(this).val());else if("tinymce"==d){var e=a(this).attr("data-tmce-id");"undefined"!=typeof tinymce&&tinymce.$("#wp-"+e+"-wrap").hasClass("tmce-active")?b[c]=tinymce.get(e).getContent():"undefined"!=typeof window.switchEditors?b[c]=window.switchEditors._wp_Autop(a("#"+e).val()):b[c]=gdlr_core_autop(a("#"+e).val())}else"custom"==d&&(b[c]=a(this).data("value"))}),b},init_conditional:function(){this.container.find("[data-condition]").each(function(){var b=a(this).closest(".gdlr-core-html-option-item").parent(),c=JSON.parse(a(this).attr("data-condition")),d=!0;for(var e in c){var f=b.find('[data-slug="'+e+'"]'),g="";g=f.is('input[type="checkbox"]')?f.is(":checked")?"enable":"disable":f.is('input[type="radio"]')?f.filter(":checked").val():f.val(),d=d&&(g==c[e]||c[e].constructor===Array&&c[e].indexOf(g)!=-1)}d?a(this).show():a(this).hide()})},bind_conditional:function(){this.container.on("change",'select, input[type="checkbox"], input[type="radio"]',function(){var b=a(this).closest(".gdlr-core-html-option-item").parent();b.children("[data-condition]").each(function(){var c=JSON.parse(a(this).attr("data-condition")),d=!0;for(var e in c){var f=b.find('[data-slug="'+e+'"]'),g="";g=f.is('input[type="checkbox"]')?f.is(":checked")?"enable":"disable":f.is('input[type="radio"]')?f.filter(":checked").val():f.val(),d=d&&(g==c[e]||c[e].constructor===Array&&c[e].indexOf(g)!=-1)}d?a(this).slideDown(200):a(this).slideUp(200)})})},bind_input_format:function(){this.container.on("change","input[data-input-type]",function(){var b=a(this).val(),c=b.match(/^-?\d+/g),d="";"pixel"==a(this).attr("data-input-type")&&(d="px"),"undefined"!=typeof c&&null!=c&&a(this).val(parseInt(c[0])+d),a(this).trigger("gdlr_core_change")}),this.container.on("keydown","input[data-input-type]",function(b){var c=b.keyCode?b.keyCode:b.which;if(40==c||38==c){var d=a(this).val(),e=d.match(/^-?\d+/g),f="";"pixel"==a(this).attr("data-input-type")&&(f="px"),"undefined"!=typeof e&&null!=e&&(40==c?a(this).val(parseInt(e[0])-1+f):38==c&&a(this).val(parseInt(e[0])+1+f),a(this).trigger("gdlr_core_change"))}})},bind_image_uploader:function(){this.container.on("click",".gdlr-core-upload-image-button",function(){var b=a(this).closest(".gdlr-core-html-option-upload-appearance"),c=b.children(".gdlr-core-upload-image-container"),d=b.children(".gdlr-core-html-option-upload"),e=b.children(".gdlr-core-html-option-upload-image");if(a(this).hasClass("gdlr-core-upload-image-add"))var f=wp.media({title:html_option_val.text.upload_media,button:{text:html_option_val.text.choose_media},multiple:!1}).on("select",function(){var a=f.state().get("selection").first().toJSON();b.addClass("gdlr-core-active"),c.css("background-image","url("+a.url+")"),d.val(a.id),e.val(a.url),d.trigger("change")}).open();else a(this).hasClass("gdlr-core-upload-image-remove")&&(b.removeClass("gdlr-core-active"),c.css("background-image",""),d.val(""),e.val(""),d.trigger("change"))})},bind_datepicker:function(){this.container.find(".gdlr-core-html-option-datepicker").each(function(){a(this).datepicker({dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0})})},bind_font_slider:function(){this.container.find(".gdlr-core-html-option-fontslider").each(function(){var b=a(this),c=a('<div class="gdlr-core-html-option-fontslider-appearance" ></div>'),d=a(this).attr("data-min-value")?parseInt(a(this).attr("data-min-value")):6,e=a(this).attr("data-max-value")?parseInt(a(this).attr("data-max-value")):160,f=a(this).attr("data-suffix")?a(this).attr("data-suffix"):"px";"none"==f&&(f=""),c.insertBefore(a(this)),c.slider({range:"min",min:d,max:e,value:parseInt(b.val()),slide:function(a,c){b.val(c.value+f)}}),b.val(parseInt(b.val())+f),a(this).on("input change",function(){c.slider("value",parseInt(b.val()))})})},bind_import:function(){this.container.find(".gdlr-core-html-option-import").each(function(){var b=a(this).find("form"),c=a(this).find(".gdlr-core-html-option-import-file"),d=a(this).find(".gdlr-core-html-option-import-button");d.click(function(){return c.val().length>0?gdlr_core_confirm_box({success:function(){b.submit()}}):gdlr_core_alert_box({status:"failed",head:"File not found",message:"Please select the file before importing"}),!1})})},bind_export:function(){this.container.find(".gdlr-core-html-option-export").each(function(){var b=a(this),c=b.find(".gdlr-core-html-option-export-button");c.click(function(){var d={action:b.attr("data-action"),security:html_option_val.text.nonce};b.find(".gdlr-core-html-option-export-option").each(function(){d.options=a(this).val()}),a.ajax({type:"POST",url:html_option_val.text.ajaxurl,data:d,dataType:"json",beforeSend:function(a,b){c.addClass("gdlr-core-now-loading")},error:function(a,b,c){gdlr_core_alert_box({status:"failed",head:html_option_val.text.error_head,message:html_option_val.text.error_message}),console.log(a,b,c)},success:function(a){c.removeClass("gdlr-core-now-loading"),"success"==a.status?gdlr_core_download_file(a.url,a.filename):"success-2"==a.status?gdlr_core_download_content(a.content,a.filename):"failed"==a.status&&gdlr_core_alert_box({status:a.status,head:a.head,message:a.message})}})})})},bind_icon_selector:function(){this.container.on("change",".gdlr-core-html-option-icons-type-select",function(){var b=a(this).val();a(this).parent().siblings(".gdlr-core-html-option-icons-type-wrapper").children('[data-icon-type="'+b+'"]').fadeIn(200).addClass("gdlr-core-active").each(function(){a(this).children("i").css({display:"inline-block"})}).siblings().css({display:"none"}).removeClass("gdlr-core-active"),a(this).parent().siblings(".gdlr-core-html-option-icons-search").val(""),"none"==b?(a(this).parent().siblings(".gdlr-core-html-option-icons-search, .gdlr-core-html-option-icons-type-wrapper").slideUp(200),a(this).parent().siblings("[data-slug]").val("")):(a(this).parent().siblings(".gdlr-core-html-option-icons-search, .gdlr-core-html-option-icons-type-wrapper").slideDown(200),a(this).parent().siblings(".gdlr-core-html-option-icons-type-wrapper").slideDown(200).children(".gdlr-core-active").children(".gdlr-core-active").trigger("click"))}),this.container.on("input",".gdlr-core-html-option-icons-search",gdlr_core_debounce(function(){var b=a(this).val();b?a(this).siblings(".gdlr-core-html-option-icons-type-wrapper").children(".gdlr-core-active").children().css({display:"inline-block"}).not('[class*="'+b+'"]').css({display:"none"}):a(this).siblings(".gdlr-core-html-option-icons-type-wrapper").children(".gdlr-core-active").children().css({display:"inline-block"})},500)),this.container.on("click",".gdlr-core-html-option-icons-type-wrapper i",function(){var b=a(this).closest(".gdlr-core-html-option-icons-type-wrapper");b.find("i").removeClass("gdlr-core-active"),b.siblings("[data-slug]").val(a(this).attr("class")),a(this).addClass("gdlr-core-active")})},bind_font_picker:function(){this.container.on("change",".gdlr-core-html-option-font",function(){var b=a(this).parent(".gdlr-core-custom-combobox").siblings(".gdlr-core-html-option-font-display"),c=b.attr("data-base-url")+"&font-family="+a(this).val();b.attr("src",c)})},bind_tinymce:function(){if("undefined"!=typeof html_option_val&&"undefined"!=typeof html_option_val.tmce){var b=0;this.container.find(".gdlr-core-html-option-tinymce").each(function(){var c="gdlr_core_tmce";0!=b&&(c+=b),a(this).attr("data-tmce-id",c),b++,"undefined"!=typeof tinymce&&null!==tinymce.get(c)&&(tinymce.get(c).remove(),a("#wp-"+c+"-wrap").remove());var d=a(html_option_val.tmce.replace(/gdlr_core_tmce/g,c));d.insertAfter(a(this));var e=a(this).html();if(e.length>0&&(d.hasClass("tmce-active")?d.find("textarea").val(e):"undefined"!=typeof window.switchEditors?d.find("textarea").val(window.switchEditors._wp_Nop(e)):d.find("textarea").val(gdlr_core_removep(e))),"undefined"!=typeof tinymce){var f=JSON.parse(JSON.stringify(tinyMCEPreInit.mceInit.gdlr_core_tmce));f.selector="#"+c,f.body_class=f.body_class.replace(/gdlr_core_tmce/g,c);var g=tinymce.$("#wp-"+c+"-wrap");!g.hasClass("tmce-active")&&tinyMCEPreInit.qtInit.hasOwnProperty(c)||f.wp_skip_init||(tinymce.init(f),g.hasClass("html-active")&&g.find(".switch-html").trigger("click"))}if("undefined"!=typeof quicktags){var h=JSON.parse(JSON.stringify(tinyMCEPreInit.qtInit.gdlr_core_tmce));h.id=c,quicktags(h),QTags._buttonsInit()}})}}};var b=function(a){this.container=a,this.values=a.data("value"),this.options=a.data("options"),this.init()};b.prototype={init:function(){var b=this,c=a('<div class="gdlr-core-html-option-padding" ></div>'),d=!b.container.closest(".gdlr-core-html-option-item").hasClass("gdlr-core-no-link");"undefined"!=typeof b.options&&0!=b.options.length||(b.options=["top","right","bottom","left"]);for(var e in b.options){var f=a('<input class="gdlr-core-html-option-padding-input" />').attr("data-padding-slug",b.options[e]);this.container.attr("data-input-type")&&f.attr("data-input-type",this.container.attr("data-input-type")),"undefined"!=typeof b.values&&"undefined"!=typeof b.values[b.options[e]]&&f.val(b.values[b.options[e]]),c.append(a('<div class="gdlr-core-html-option-padding-item" ></div>').append(f).append("<span>"+b.options[e]+"</span>"))}if(d){var g="link";"undefined"!=typeof b.values&&"undefined"!=typeof b.values.settings&&(g=b.values.settings);var h=a('<div class="gdlr-core-html-option-padding-settings" >\t\t\t\t\t\t<i class="fa fa-link" data-padding-type="link" ></i><i class="fa fa-unlink" data-padding-type="unlink" ></i>\t\t\t\t\t\t<input type="hidden" value="'+g+'" data-padding-slug="settings" />\t\t\t\t\t</div>');h.find('[data-padding-type="'+g+'"]').addClass("gdlr-core-active"),h.find("[data-padding-type]").click(function(){a(this).hasClass("gdlr-core-active")||(g=a(this).attr("data-padding-type"),a(this).addClass("gdlr-core-active").siblings("[data-padding-type]").removeClass("gdlr-core-active"),a(this).siblings("[data-padding-slug]").val(g),b.update_data())}),c.append(h)}c.on("input change gdlr_core_change","input",function(c){"link"==g&&a(this).closest(".gdlr-core-html-option-padding-item").siblings(".gdlr-core-html-option-padding-item").find(" [data-padding-slug]").val(a(this).val()),b.update_data()}),b.container.append(c)},update_data:function(){var b=this;b.values={},b.container.find("[data-padding-slug]").each(function(){b.values[a(this).attr("data-padding-slug")]=a(this).val()}),b.container.data("value",b.values)}};var c=function(b){this.container=b,this.values=b.data("value"),this.input_name=a('<input class="gdlr-core-html-option-text" placeholder="'+html_option_val.skin.input+'" />'),this.input_submit=a('<div class="gdlr-core-html-option-skin-input-add" ></div>'),this.skin_container=a('<div class="gdlr-core-html-option-skin-container clearfix" ></div>'),this.template=a('<div class="gdlr-core-html-option-skin-template" >\t\t\t\t<div class="gdlr-core-html-option-skin-head" >\t\t\t\t\t<input type="hidden" data-skin-slug="name" >\t\t\t\t\t<div class="gdlr-core-html-option-skin-name" ></div>\t\t\t\t\t<div class="gdlr-core-html-option-skin-remove" ></div>\t\t\t\t</div>\t\t\t</div>');var c=b.data("options"),d=a('<div class="gdlr-core-html-option-skin-item" ></div>').appendTo(this.template);for(var e in c)"undefined"!=typeof c[e].type&&"title"==c[e].type?d.append(a('<div class="gdlr-core-html-option-skin-item-section-title" ></div>').append(c[e].title)):d.append(a('<div class="gdlr-core-html-option-skin-item-content"></div>').append(a('<div class="gdlr-core-html-option-skin-item-title" ></div>').append(c[e].title)).append(a('<input type="text" class="gdlr-core-html-option-skin-item-color" />').attr({"data-skin-slug":e,"data-default":c[e].default}).val(c[e].default)));this.init()};c.prototype={init:function(){var b=this;a('<div class="gdlr-core-html-option-skin-input-wrapper clearfix" ></div>').append(a('<div class="gdlr-core-html-option-skin-input" >').append(b.input_name).append(b.input_submit)).append(a('<div class="gdlr-core-html-option-item-description" ></div>').html(html_option_val.skin.description)).appendTo(b.container),b.container.append(b.skin_container);for(var c in b.values)b.skin_container.append(b.get_template(b.values[c]));b.bind_submit(),b.bind_head_button()},bind_submit:function(){var a=this;a.input_submit.click(function(){var b=a.input_name.val();if(b.length>0){for(var c in a.values)if(a.values[c].name==b)return void gdlr_core_alert_box({status:"failed",message:html_option_val.skin.duplicate_input,duration:2500});a.input_name.val(""),a.create_skin(b)}else gdlr_core_alert_box({status:"failed",message:html_option_val.skin.empty_input,duration:2e3})})},bind_head_button:function(){var b=this;b.container.on("click",".gdlr-core-html-option-skin-remove",function(){var c=a(this);return gdlr_core_confirm_box({success:function(){c.closest(".gdlr-core-html-option-skin-template").slideUp(200,function(){a(this).remove(),b.update_data()})}}),!1}),b.container.on("click",".gdlr-core-html-option-skin-head",function(){a(this).closest(".gdlr-core-html-option-skin-head").siblings(".gdlr-core-html-option-skin-item").slideToggle(200)})},create_skin:function(a){var b=this,c=b.get_template({name:a});b.skin_container.append(c),c.find(".gdlr-core-html-option-skin-item").css({display:"block"}),c.css("display","none").slideDown(200,function(){b.update_data()})},get_template:function(a){var b=this,c=b.template.clone();for(var d in a)"name"==d?c.find('[data-skin-slug="'+d+'"]').val(a[d]).siblings(".gdlr-core-html-option-skin-name").html(a[d]):c.find('[data-skin-slug="'+d+'"]').val(a[d]);return c.find(".gdlr-core-html-option-skin-item-color").wpColorPicker({change:gdlr_core_debounce(function(a,c){b.update_data()},500)}),c},update_data:function(){var b=this;b.values=[],b.skin_container.find(".gdlr-core-html-option-skin-template").each(function(){var c={};a(this).find("[data-skin-slug]").each(function(){c[a(this).attr("data-skin-slug")]=a(this).val()}),b.values.push(c)}),b.container.data("value",b.values)}};var d=function(b){var c=this;c.container=b,c.values=b.data("value"),c.options=b.data("options"),c.gallery_container=a('<div class="gdlr-core-html-option-gallery-container" ></div>'),c.add_button=a('<div class="gdlr-core-html-option-gallery-add" ><i class="icon_plus" ></i></div>'),c.template=a('<div class="gdlr-core-html-option-gallery-template">\t\t\t\t<img class="gdlr-core-html-option-gallery-template-thumbnail" src="" alt="" /> \t\t\t\t<div class="gdlr-core-html-option-gallery-template-remove" ><i class="fa fa-remove" ></i></div>\t\t\t</div>'),c.init()};d.prototype={init:function(){var b=this;b.container.append(b.add_button).append(b.gallery_container);for(var c in b.values)b.add_template(b.values[c]);b.bind_add(),b.bind_gallery_edit(),b.gallery_container.on("click",".gdlr-core-html-option-gallery-template-remove",function(){return a(this).closest(".gdlr-core-html-option-gallery-template").fadeOut(200,function(){a(this).remove(),b.update_data()}),!1}),b.gallery_container.sortable({tolerance:"pointer",stop:function(a,c){b.update_data()}})},bind_add:function(){var a=this;a.add_button.click(function(){var b=wp.media({title:html_option_val.text.upload_media,button:{text:html_option_val.text.choose_media},multiple:"add"}).on("select",function(){var c=b.state().get("selection").toJSON();for(var d in c){var e=c[d].sizes.full.url;"undefined"!=typeof c[d].sizes.thumbnail&&(e=c[d].sizes.thumbnail.url),a.add_template({id:c[d].id,thumbnail:e})}a.update_data()}).open()})},bind_gallery_edit:function(){var b=this;b.gallery_container.on("click",".gdlr-core-html-option-gallery-template",function(){var c=a(this),d=a('<div class="gdlr-core-html-option-gallery-loading" ></div>');a.ajax({type:"POST",url:html_option_val.text.ajaxurl,data:{action:"gdlr_get_gallery_options",security:html_option_val.text.nonce,options:b.options,value:a(this).data("value")},dataType:"json",beforeSend:function(a,b){d.css({display:"none"}).appendTo("body"),d.fadeIn(150)},error:function(a,b,c){gdlr_core_alert_box({status:"failed",head:html_option_val.text.error_head,message:html_option_val.text.error_message}),console.log(a,b,c)},success:function(a){d.remove(),"success"==a.status?b.gallery_lb_edit(a.option_content,c):"failed"==a.status&&gdlr_core_alert_box({status:a.status,head:a.head,message:a.message})}})})},gallery_lb_edit:function(b,c){var d=this,e=a('<div class="gdlr-core-gallery-lightbox-content"></div>');a("body").append(e),e.append(b),e.css({opacity:0}).animate({opacity:1},400);var f=new gdlrCoreHtmlOption(e);e.find("#gdlr-core-gallery-lb-head-close").click(function(){e.fadeOut(200,function(){a(this).remove()})}),e.find("#gdlr-core-gallery-lb-options-save").click(function(){var b=a.extend(f.get_val(),c.data("value"));c.data("value",b),d.update_data(),e.fadeOut(200,function(){a(this).remove()})})},add_template:function(a){var b=this.template.clone();b.data("value",a),b.find(".gdlr-core-html-option-gallery-template-thumbnail").attr("src",a.thumbnail),this.gallery_container.append(b)},update_data:function(){var b=this;b.values=[],b.gallery_container.find(".gdlr-core-html-option-gallery-template").each(function(){b.values.push(a(this).data("value"))}),b.container.data("value",b.values)}};var e=function(b){var c=this;c.container=b,c.values=b.data("value"),c.tab_container=a('<div class="gdlr-core-html-option-key-value-container" >'),c.add_button=a('<div class="gdlr-core-html-option-key-value-add" ></div>'),c.item_template=a('<div class="gdlr-core-html-option-key-value-template" >\t\t\t\t<div class="gdlr-core-html-option-key-value-wrap clearfix" >\t\t\t\t\t<div class="gdlr-core-html-option-key-value-first">\t\t\t\t\t\t<input type="text" class="gdlr-core-html-option-key-value-key" data-key-value-slug="key" placeholder="Key" />\t\t\t\t\t</div>\t\t\t\t\t<div class="gdlr-core-html-option-key-value-second">\t\t\t\t\t\t<input type="text" class="gdlr-core-html-option-key-value-value" data-key-value-slug="value" placeholder="Value" />\t\t\t\t\t</div>\t\t\t\t\t<div class="gdlr-core-html-option-key-value-remove"></div>\t\t\t\t</div>\t\t\t</div>'),c.init()};e.prototype={init:function(){var b=this;if(b.container.append(b.tab_container),b.container.closest(".gdlr-core-html-option-item-input").siblings(".gdlr-core-html-option-item-title").append(b.add_button),b.bind_add(),b.values&&b.values.length>0)for(var c in b.values)b.tab_container.append(b.get_template(b.values[c]));b.tab_container.sortable({tolerance:"pointer",stop:function(a,c){b.update_data()}}),b.container.on("click",".gdlr-core-html-option-key-value-remove",function(){a(this).closest(".gdlr-core-html-option-key-value-template").slideUp(200,function(){a(this).remove(),b.update_data()})}),b.container.on("input change",'input[type="text"]',gdlr_core_debounce(function(){b.update_data()},500))},bind_add:function(){var a=this;a.add_button.click(function(){var b=a.get_template();a.tab_container.append(b),b.css({display:"none"}).slideDown(200),a.update_data()})},get_template:function(b){var c=this.item_template.clone();for(var d in b)c.find('[data-key-value-slug="'+d+'"]').each(function(){a(this).val(b[d])});return c},update_data:function(){var b=this;b.values=[],b.tab_container.find(".gdlr-core-html-option-key-value-template").each(function(){var c={};a(this).find("[data-key-value-slug]").each(function(){c[a(this).attr("data-key-value-slug")]=a(this).val()}),b.values.push(c)}),b.container.data("value",b.values)}};var f=function(b){var c=this;c.container=b,c.values=b.data("value"),c.tabs_container=a('<div class="gdlr-core-html-option-tabs-container" ></div>'),c.add_button=a('<div class="gdlr-core-html-option-tabs-add"></div>'),c.template={text:'<div class="gdlr-core-html-option-tabs-field" >\t\t\t\t<span class="gdlr-core-html-option-tabs-input-title" ></span>\t\t\t\t<input type="text" class="gdlr-core-html-option-tabs-input gdlr-core-html-option-text" data-tabs-slug="" >\t\t\t</div>',textarea:'<div class="gdlr-core-html-option-tabs-field" >\t\t\t\t<span class="gdlr-core-html-option-tabs-input-title" ></span>\t\t\t\t<textarea class="gdlr-core-html-option-tabs-input gdlr-core-html-option-textarea" data-tabs-slug="" ></textarea>\t\t\t</div>',combobox:'<div class="gdlr-core-html-option-tabs-field" >\t\t\t\t<span class="gdlr-core-html-option-tabs-input-title" ></span>\t\t\t\t<div class="gdlr-core-custom-combobox" >\t\t\t\t\t<select class="gdlr-core-html-option-combobox" data-type="combobox" data-tabs-slug="" ></select>\t\t\t\t</div>\t\t\t</div>',colorpicker:'<div class="gdlr-core-html-option-tabs-field" >\t\t\t\t<span class="gdlr-core-html-option-tabs-input-title" ></span>\t\t\t\t<input type="text" class="gdlr-core-html-option-tabs-colorpicker gdlr-core-html-option-colorpicker" data-tabs-slug="" >\t\t\t</div>',checkbox:'<div class="gdlr-core-html-option-tabs-field" >\t\t\t\t<span class="gdlr-core-html-option-tabs-input-title" ></span>\t\t\t\t<label>\t\t\t\t\t<input type="checkbox" class="gdlr-core-html-option-checkbox" data-tabs-slug="" checked="checked">\t\t\t\t\t<div class="gdlr-core-html-option-checkbox-appearance gdlr-core-noselect">\t\t\t\t\t\t<span class="gdlr-core-checkbox-button gdlr-core-on">'+html_option_val.tabs.tab_checkbox_on+'</span>\t\t\t\t\t\t<span class="gdlr-core-checkbox-separator"></span>\t\t\t\t\t\t<span class="gdlr-core-checkbox-button gdlr-core-off">'+html_option_val.tabs.tab_checkbox_off+"</span>\t\t\t\t\t</div>\t\t\t\t</label>\t\t\t</div>",upload:'<div class="gdlr-core-html-option-tabs-field" >\t\t\t\t<span class="gdlr-core-html-option-tabs-input-title" ></span>\t\t\t\t<div class="gdlr-core-html-option-upload-appearance" >\t\t\t\t\t<input type="hidden" class="gdlr-core-html-option-upload" data-type="upload" data-tabs-slug="" />\t\t\t\t\t<input type="hidden" class="gdlr-core-html-option-upload-image" data-type="upload-img" data-tabs-slug="" />\t\t\t\t\t<div class="gdlr-core-upload-image-container" style="" ></div>\t\t\t\t\t<div class="gdlr-core-upload-image-overlay" >\t\t\t\t\t\t<div class="gdlr-core-upload-image-button-hover">\t\t\t\t\t\t\t<span class="gdlr-core-upload-image-button gdlr-core-upload-image-add"><i class="icon_plus" ></i></span>\t\t\t\t\t\t\t<span class="gdlr-core-upload-image-button gdlr-core-upload-image-remove"><i class="icon_minus-06" ></i></span>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>'},c.item_template=a('<div class="gdlr-core-html-option-tabs-template" >\t\t\t\t<div class="gdlr-core-html-option-tabs-template-title" >\t\t\t\t\t<span class="gdlr-core-head" >'+html_option_val.tabs.title_text+'</span>\t\t\t\t\t<div class="gdlr-core-html-option-tabs-remove"></div>\t\t\t\t</div>\t\t\t</div>');var d=b.data("options"),e=a('<div class="gdlr-core-html-option-tabs-template-content" ></div>');for(var f in d){var g=a(c.template[d[f].type]);"combobox"==d[f].type&&console.log(d[f]),g.find("[data-tabs-slug]").each(function(){if("undefined"!=typeof d[f]["data-input-type"]&&a(this).attr("data-input-type",d[f]["data-input-type"]),"upload-img"==a(this).attr("data-type"))a(this).attr("data-tabs-slug",f+"-img");else if(a(this).attr("data-tabs-slug",f),"combobox"==a(this).attr("data-type")&&"undefined"!=typeof d[f].options)for(var b in d[f].options){var c=a("<option></option>").attr("value",b).html(d[f].options[b]);a(this).append(c)}}),g.find(".gdlr-core-html-option-tabs-input-title").html(d[f].title),e.append(g)}c.item_template.append(e),c.init()};f.prototype={init:function(){var b=this;if(b.container.append(b.tabs_container),b.container.closest(".gdlr-core-html-option-item-input").siblings(".gdlr-core-html-option-item-title").append(b.add_button),b.values&&b.values.length>0){for(var c in b.values)b.tabs_container.append(b.get_template(b.values[c]));b.tabs_container.find(".gdlr-core-html-option-colorpicker").wpColorPicker({change:gdlr_core_debounce(function(a,c){b.update_data()},500)})}b.tabs_container.sortable({tolerance:"pointer",stop:function(a,c){b.update_data()}}),b.bind_add(),b.container.on("click",".gdlr-core-html-option-tabs-remove",function(){a(this).closest(".gdlr-core-html-option-tabs-template").slideUp(200,function(){a(this).remove(),b.update_data()})}),b.container.on("click",".gdlr-core-html-option-tabs-template-title",function(){a(this).siblings(".gdlr-core-html-option-tabs-template-content").slideToggle(200)}),b.container.on("input change gdlr_core_change",'input[type="text"], textarea',gdlr_core_debounce(function(){"title"==a(this).attr("data-tabs-slug")&&a(this).closest(".gdlr-core-html-option-tabs-template-content").siblings(".gdlr-core-html-option-tabs-template-title").children(".gdlr-core-head").html(a(this).val()),b.update_data()},500)),b.container.on("change",'input[type="checkbox"], input[type="hidden"]',function(){b.update_data()})},bind_add:function(){var a=this;a.add_button.click(function(){var b=a.get_template();a.tabs_container.append(b),b.find(".gdlr-core-html-option-colorpicker").wpColorPicker({change:gdlr_core_debounce(function(b,c){a.update_data()},500)}),b.find(".gdlr-core-html-option-tabs-template-content").css({display:"block"}),b.css({display:"none"}).slideDown(200),a.update_data()})},get_template:function(b){var c=this,d=c.item_template.clone();for(var e in b)d.find('[data-tabs-slug="'+e+'"]').each(function(){a(this).is('input[type="checkbox"]')?"enable"==b[e]?a(this).prop("checked",!0):a(this).prop("checked",!1):"upload-img"==a(this).attr("data-type")?(a(this).val(b[e]),a(this).closest(".gdlr-core-html-option-upload-appearance").addClass("gdlr-core-active"),a(this).siblings(".gdlr-core-upload-image-container").css("background-image","url("+b[e]+")")):a(this).val(b[e])}),"title"==e&&d.find(".gdlr-core-html-option-tabs-template-title").children(".gdlr-core-head").html(b[e]);return d},update_data:function(){var b=this;b.values=[],b.tabs_container.find(".gdlr-core-html-option-tabs-template").each(function(){var c={};a(this).find("[data-tabs-slug]").each(function(){a(this).is('input[type="checkbox"]')?c[a(this).attr("data-tabs-slug")]=a(this).is(":checked")?"enable":"disable":c[a(this).attr("data-tabs-slug")]=a(this).val()}),b.values.push(c)}),b.container.data("value",b.values)}};var g=function(b){this.container=b,this.values=b.data("value"),this.input_fields=a('<div class="gdlr-core-html-option-thumbnail-sizing-input-wrapper" >\t\t\t\t<div class="gdlr-core-html-option-thumbnail-sizing-input-name" >\t\t\t\t\t<span class="gdlr-core-html-option-thumbnail-sizing-input-title" >'+html_option_val.thumbnail_sizing.name+'</span>\t\t\t\t\t<input class="gdlr-core-html-option-thumbnail-sizing-input gdlr-core-html-option-text" data-thumbnail-sizing-slug="name" >\t\t\t\t</div>\t\t\t\t<div class="gdlr-core-html-option-thumbnail-sizing-input-options" >\t\t\t\t\t<div class="gdlr-core-html-option-thumbnail-sizing-input-width" >\t\t\t\t\t\t<span class="gdlr-core-html-option-thumbnail-sizing-input-title" >'+html_option_val.thumbnail_sizing.width+'</span>\t\t\t\t\t\t<input class="gdlr-core-html-option-thumbnail-sizing-input gdlr-core-html-option-text" data-thumbnail-sizing-slug="width" >\t\t\t\t\t</div>\t\t\t\t\t<div class="gdlr-core-html-option-thumbnail-sizing-input-height" >\t\t\t\t\t\t<span class="gdlr-core-html-option-thumbnail-sizing-input-title" >'+html_option_val.thumbnail_sizing.height+'</span>\t\t\t\t\t\t<input class="gdlr-core-html-option-thumbnail-sizing-input gdlr-core-html-option-text" data-thumbnail-sizing-slug="height" >\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>'),this.input_submit=a('<div class="gdlr-core-html-option-thumbnail-sizing-input-add" >'+html_option_val.thumbnail_sizing.add+"</div>").appendTo(this.input_fields),this.input_fields.append('<div class="gdlr-core-html-option-thumbnail-sizing-input-description" >'+html_option_val.thumbnail_sizing.description+"</div>"),this.thumbnail_sizing_container=a('<div class="gdlr-core-html-option-thumbnail-sizing-container clearfix" ></div>'),this.template=a('<div class="gdlr-core-html-option-thumbnail-sizing-template" >\t\t\t\t<input type="hidden" data-thumbnail-sizing-slug="name" >\t\t\t\t<input type="hidden" data-thumbnail-sizing-slug="width" >\t\t\t\t<input type="hidden" data-thumbnail-sizing-slug="height" >\t\t\t\t<input type="hidden" data-thumbnail-sizing-slug="hard-crop" >\t\t\t\t<div class="gdlr-core-html-option-thumbnail-sizing-name" ></div>\t\t\t\t<div class="gdlr-core-html-option-thumbnail-sizing-remove" ></div>\t\t\t</div>'),this.init()};g.prototype={init:function(){var a=this;a.container.append(a.thumbnail_sizing_container);for(var b in a.values)a.thumbnail_sizing_container.append(a.get_template(a.values[b]));a.container.append(this.input_fields),a.bind_submit(),a.bind_remove_button()},bind_submit:function(){var b=this;b.input_submit.click(function(){var c={},d=!0;b.input_fields.find("[data-thumbnail-sizing-slug]").each(function(){return""==a(this).val().trim()?void(d=!1):void("width"==a(this).attr("data-thumbnail-sizing-slug")||"height"==a(this).attr("data-thumbnail-sizing-slug")?c[a(this).attr("data-thumbnail-sizing-slug")]=parseInt(a(this).val()):c[a(this).attr("data-thumbnail-sizing-slug")]=a(this).val())}),d?b.create_option(c):gdlr_core_alert_box({status:"failed",message:html_option_val.thumbnail_sizing.empty_input,duration:2e3})})},bind_remove_button:function(){var b=this;b.container.on("click",".gdlr-core-html-option-thumbnail-sizing-remove",function(){var c=a(this);return gdlr_core_confirm_box({success:function(){c.closest(".gdlr-core-html-option-thumbnail-sizing-template").slideUp(200,function(){a(this).remove(),b.update_data()})}}),!1})},create_option:function(a){var b=this,c=b.get_template(a);b.thumbnail_sizing_container.append(c),c.css("display","none").slideDown(200,function(){b.update_data()})},get_template:function(a){var b=this,c=b.template.clone();for(var d in a)c.find('[data-thumbnail-sizing-slug="'+d+'"]').val(a[d]);return c.find(".gdlr-core-html-option-thumbnail-sizing-name").html(a.name+'<span class="gdlr-core-tail" >'+a.width+"*"+a.height+"px</span>"),
c},update_data:function(){var b=this;b.values=[],b.thumbnail_sizing_container.find(".gdlr-core-html-option-thumbnail-sizing-template").each(function(){var c={};a(this).find("[data-thumbnail-sizing-slug]").each(function(){c[a(this).attr("data-thumbnail-sizing-slug")]=a(this).val()}),b.values.push(c)}),b.container.data("value",b.values)}};var h=function(b){this.container=b,this.values=b.data("value"),this.add_button=a('<div class="gdlr-core-html-option-font-upload-add"></div>'),this.font_none=a('<div class="gdlr-core-html-option-font-upload-none" ></div>').html(html_option_val.fontupload.none),this.font_container=a('<div class="gdlr-core-html-option-font-upload-container" ></div>'),this.template=a('<div class="gdlr-core-html-option-font-upload-template" >\t\t\t\t<div class="gdlr-core-html-option-font-upload-remove" ></div>\t\t\t\t<div class="gdlr-core-html-option-font-upload-field" >\t\t\t\t\t<div class="gdlr-core-html-option-font-upload-title">'+html_option_val.fontupload.font_name+'</div>\t\t\t\t\t<input class="gdlr-core-html-option-font-upload-title gdlr-core-html-option-text" placeholder="'+html_option_val.fontupload.font_name_p+'" data-fontupload-slug="name" />\t\t\t\t</div>\t\t\t\t<div class="gdlr-core-html-option-font-upload-field" >\t\t\t\t\t<div class="gdlr-core-html-option-font-upload-title">'+html_option_val.fontupload.eot+'</div>\t\t\t\t\t<input class="gdlr-core-html-option-font-upload-title gdlr-core-html-option-text" data-fontupload-slug="eot" />\t\t\t\t\t<div class="gdlr-core-html-option-font-upload-button">'+html_option_val.fontupload.button+'</div>\t\t\t\t</div>\t\t\t\t<div class="gdlr-core-html-option-font-upload-field" >\t\t\t\t\t<div class="gdlr-core-html-option-font-upload-title">'+html_option_val.fontupload.ttf+'</div>\t\t\t\t\t<input class="gdlr-core-html-option-font-upload-title gdlr-core-html-option-text" data-fontupload-slug="ttf" />\t\t\t\t\t<div class="gdlr-core-html-option-font-upload-button">'+html_option_val.fontupload.button+"</div>\t\t\t\t</div>\t\t\t</div>"),this.init()};h.prototype={init:function(){var a=this;if(a.container.closest(".gdlr-core-html-option-item-input").siblings(".gdlr-core-html-option-item-title").append(a.add_button),a.container.append(a.font_container),a.font_container.append(a.font_none),a.values&&a.values.length>0){a.font_none.css("display","none");for(var b in a.values)this.font_container.append(this.get_template(a.values[b]))}a.bind_add(),a.bind_remove(),a.font_container.on("change","input[data-fontupload-slug]",function(){a.update_data()})},bind_add:function(){var a=this;a.add_button.click(function(){var b=a.get_template();a.font_none.slideUp(200),a.font_container.append(b),b.css("display","none").slideDown(200),a.update_data()})},bind_remove:function(){var b=this;b.font_container.on("click",".gdlr-core-html-option-font-upload-remove",function(){(!b.values||b.values.length<=1)&&b.font_none.slideDown(200),a(this).closest(".gdlr-core-html-option-font-upload-template").slideUp(200,function(){a(this).remove(),b.update_data()})})},get_template:function(b){var c=this.template.clone();for(var d in b)c.find('[data-fontupload-slug="'+d+'"]').val(b[d]);return c.find(".gdlr-core-html-option-font-upload-button").click(function(){var b=a(this).siblings(".gdlr-core-html-option-font-upload-title"),c=wp.media({title:html_option_val.text.upload_media,button:{text:html_option_val.text.choose_media},multiple:!1}).on("select",function(){var a=c.state().get("selection").first().toJSON();b.val(a.url).trigger("change")}).open()}),c},update_data:function(){var b=this;b.values=[],b.font_container.find(".gdlr-core-html-option-font-upload-template").each(function(){var c={};a(this).find("[data-fontupload-slug]").each(function(){c[a(this).attr("data-fontupload-slug")]=a(this).val()}),b.values.push(c)}),b.container.data("value",b.values)}}}(jQuery);