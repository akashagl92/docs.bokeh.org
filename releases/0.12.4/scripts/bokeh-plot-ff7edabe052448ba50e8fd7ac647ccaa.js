(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d61fc5d6-35a9-4cc2-abf5-8d568f1db6f5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd61fc5d6-35a9-4cc2-abf5-8d568f1db6f5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"4a46fdfd-d074-4942-b4c3-3308a6650e63":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["color","centers","values","abbr_medal","start","outers","end","inners","level"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":[1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25],"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":[0.37952126016520993,0.04216902890724555,0.12650708672173663,0.37952126016520993,1.0542257226811387,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.475916011753594,1.0963947515883843,1.3494089250318575,1.475916011753594,2.1084514453622774,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.530141734434733,2.319296589898505,2.445803676620242,2.530141734434733,3.373522312579644,2.8674939656926974,3.1205081391361706,3.373522312579644,4.174733861817309,3.6687055149303625,4.006057746188326,4.174733861817309,5.060283468869465,4.469917064168028,4.722931237611501,5.060283468869465,5.439804729034675,5.144621526683956,5.228959584498447,5.439804729034674,6.283185307179586,5.86149501810713,6.114509191550603,6.283185307179585],"inners":[0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5],"level":[0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0],"outers":[1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0],"start":[0.0,0.0,0.04216902890724555,0.12650708672173663,0.37952126016520993,0.37952126016520993,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.0542257226811387,1.0963947515883843,1.3494089250318575,1.475916011753594,1.475916011753594,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.1084514453622774,2.319296589898505,2.445803676620242,2.530141734434733,2.530141734434733,2.8674939656926974,3.1205081391361706,3.373522312579644,3.373522312579644,3.6687055149303625,4.006057746188326,4.174733861817309,4.174733861817309,4.469917064168028,4.722931237611501,5.060283468869465,5.060283468869465,5.144621526683956,5.228959584498447,5.439804729034675,5.439804729034674,5.86149501810713,6.114509191550603],"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"4847aa63-f4b2-47d4-a248-096fc39eaf2b","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"64522a57-8de6-44a8-8320-afca546c4097","type":"BoxAnnotation"},"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"4742ca71-ca64-4f52-866b-80f191605a4a","type":"BoxZoomTool"},{"attributes":{},"id":"629706c0-3b9e-42a3-9cfa-7fe5cc97cfd6","type":"ToolEvents"},{"attributes":{},"id":"0cc8210e-99f2-4d32-b403-4b0d518a0b58","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"64759896-6059-4002-b409-9f2c8909db77","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"4847aa63-f4b2-47d4-a248-096fc39eaf2b","type":"ColumnDataSource"},"glyph":{"id":"64759896-6059-4002-b409-9f2c8909db77","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"695361cd-3248-4acd-9ef0-2162503f10dc","type":"GlyphRenderer"},{"attributes":{"axis_label":null,"formatter":{"id":"0cc8210e-99f2-4d32-b403-4b0d518a0b58","type":"BasicTickFormatter"},"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"},"ticker":{"id":"6b459505-cfa6-4e50-bad3-cb532ef7d4bd","type":"BasicTicker"},"visible":false},"id":"2663440c-a38b-4928-a0b4-3d0b47d0a5b7","type":"LinearAxis"},{"attributes":{"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"0d110fae-31de-4fa5-8225-57e84ee7e382","type":"PanTool"},{"attributes":{"location":"top_left","plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"809ec51b-14db-4624-9663-f7a162ff3e96","type":"Legend"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"152f979d-345e-4639-b257-99ab91554a3d","type":"Range1d"},{"attributes":{},"id":"eeb0c4ac-7b4a-4cf1-a173-73e0935b0a22","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"61be2ab9-223f-417c-992b-bfcb00c74731","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"530644c2-544f-4581-b1b8-34cc57418c7f","type":"Title"},{"attributes":{"axis_label":null,"formatter":{"id":"eeb0c4ac-7b4a-4cf1-a173-73e0935b0a22","type":"BasicTickFormatter"},"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"},"ticker":{"id":"587b151d-97b9-408e-93da-7e3e336c4bfe","type":"BasicTicker"},"visible":false},"id":"be8d7e45-126f-4fe0-a86e-fa7370e59c7c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","text_angle","y","text"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":{"__ndarray__":"AAAAAAAAAADXEx/QLZeVP9cTH9Atl7U/4U4XXGIx0D8AAAAAAAAAAEi7Kv7er90/miId87o95D8KyighbFbsPwAAAAAAAAAA0MPYgXg08T/7KZyEAZHzP8WI4PVDmvY/AAAAAAAAAADw7qP4zPb4PzaHDA7H0RNAEN39BUa/FEAAAAAAAAAAAK/VfnT/axVATs7/4rgYFkCxaRDIrIQWQAAAAAAAAAAAeKAxkpRcF0COU5MT2YoYQHzIVDnvjRlAAAAAAAAAAAB9XOaMnKYaQKYuGDx46htAlKPZYY7tHEAAAAAAAAAAAG/5ylkN2x1AcY1crbrzHkD6KZyEAZETQAAAAAAAAAAAwGC9TuloFEAQ3f0FRr8UQJq2rkZoVhVAAAAAAAAAAADEiOD1Q5oWQAF64tK28xdAyLADnZ7LGEA=","dtype":"float64","shape":[40]},"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"94ad1e88-bf41-4d4f-96c8-2e62dc55115b","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d110fae-31de-4fa5-8225-57e84ee7e382","type":"PanTool"},{"id":"5ce68d54-d4ec-477d-bb65-758e2feaba6b","type":"WheelZoomTool"},{"id":"4742ca71-ca64-4f52-866b-80f191605a4a","type":"BoxZoomTool"},{"id":"3d6d912d-d325-4476-8705-2a77c48aeb59","type":"SaveTool"},{"id":"61be2ab9-223f-417c-992b-bfcb00c74731","type":"ResetTool"},{"id":"85535b1a-e2a2-4445-a920-47e5b7215707","type":"HelpTool"}]},"id":"1d9bcb40-efdd-4173-a22f-60c3925f0061","type":"Toolbar"},{"attributes":{},"id":"6b459505-cfa6-4e50-bad3-cb532ef7d4bd","type":"BasicTicker"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"93b3ea2f-96d3-4687-a5e5-f2c49ea6f652","type":"Text"},{"attributes":{"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"3d6d912d-d325-4476-8705-2a77c48aeb59","type":"SaveTool"},{"attributes":{},"id":"587b151d-97b9-408e-93da-7e3e336c4bfe","type":"BasicTicker"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"603e92e9-1fb0-4167-a549-fb186c669ff7","type":"Range1d"},{"attributes":{"below":[{"id":"2663440c-a38b-4928-a0b4-3d0b47d0a5b7","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"be8d7e45-126f-4fe0-a86e-fa7370e59c7c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"64522a57-8de6-44a8-8320-afca546c4097","type":"BoxAnnotation"},{"id":"695361cd-3248-4acd-9ef0-2162503f10dc","type":"GlyphRenderer"},{"id":"aa9ae77a-d675-41dc-88f5-85638f5de6d7","type":"GlyphRenderer"},{"id":"809ec51b-14db-4624-9663-f7a162ff3e96","type":"Legend"},{"id":"2663440c-a38b-4928-a0b4-3d0b47d0a5b7","type":"LinearAxis"},{"id":"be8d7e45-126f-4fe0-a86e-fa7370e59c7c","type":"LinearAxis"}],"title":{"id":"530644c2-544f-4581-b1b8-34cc57418c7f","type":"Title"},"tool_events":{"id":"629706c0-3b9e-42a3-9cfa-7fe5cc97cfd6","type":"ToolEvents"},"toolbar":{"id":"1d9bcb40-efdd-4173-a22f-60c3925f0061","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"603e92e9-1fb0-4167-a549-fb186c669ff7","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"152f979d-345e-4639-b257-99ab91554a3d","type":"Range1d"}},"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"94ad1e88-bf41-4d4f-96c8-2e62dc55115b","type":"ColumnDataSource"},"glyph":{"id":"93b3ea2f-96d3-4687-a5e5-f2c49ea6f652","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aa9ae77a-d675-41dc-88f5-85638f5de6d7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"5ce68d54-d4ec-477d-bb65-758e2feaba6b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"24773246-cd83-4f8f-a61b-b49e790b0aeb","subtype":"Chart","type":"Plot"}},"id":"85535b1a-e2a2-4445-a920-47e5b7215707","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64522a57-8de6-44a8-8320-afca546c4097","type":"BoxAnnotation"}],"root_ids":["24773246-cd83-4f8f-a61b-b49e790b0aeb"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4a46fdfd-d074-4942-b4c3-3308a6650e63","elementid":"d61fc5d6-35a9-4cc2-abf5-8d568f1db6f5","modelid":"24773246-cd83-4f8f-a61b-b49e790b0aeb"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
