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
      };var element = document.getElementById("c43015bb-3d3b-476b-a2a0-9bb783f45954");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c43015bb-3d3b-476b-a2a0-9bb783f45954' but no matching script tag was found. ")
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
                var docs_json = {"ae6650f8-20af-480d-a3b5-4e4970659492":{"roots":{"references":[{"attributes":{"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"27a5eb2f-2249-4b55-ae65-e778c2b2a9a6","type":"HelpTool"},{"attributes":{"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"ab738e1c-5bf8-4ab9-a92b-9104b9ef40a3","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","text_angle","y","text"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":{"__ndarray__":"AAAAAAAAAADXEx/QLZeVP9cTH9Atl7U/4U4XXGIx0D8AAAAAAAAAAEi7Kv7er90/miId87o95D8KyighbFbsPwAAAAAAAAAA0MPYgXg08T/7KZyEAZHzP8WI4PVDmvY/AAAAAAAAAADw7qP4zPb4PzaHDA7H0RNAEN39BUa/FEAAAAAAAAAAAK/VfnT/axVATs7/4rgYFkCxaRDIrIQWQAAAAAAAAAAAeKAxkpRcF0COU5MT2YoYQHzIVDnvjRlAAAAAAAAAAAB9XOaMnKYaQKYuGDx46htAlKPZYY7tHEAAAAAAAAAAAG/5ylkN2x1AcY1crbrzHkD6KZyEAZETQAAAAAAAAAAAwGC9TuloFEAQ3f0FRr8UQJq2rkZoVhVAAAAAAAAAAADEiOD1Q5oWQAF64tK28xdAyLADnZ7LGEA=","dtype":"float64","shape":[40]},"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"07d21086-0e95-4088-86d7-eb1d8458c003","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ab738e1c-5bf8-4ab9-a92b-9104b9ef40a3","type":"PanTool"},{"id":"a91d5840-3086-4e77-b258-00bafc475726","type":"WheelZoomTool"},{"id":"d5ca0b19-9c34-4206-a592-d197fa57c294","type":"BoxZoomTool"},{"id":"6702ef8e-89ad-44dd-b2eb-01d099d4e4f7","type":"SaveTool"},{"id":"ffb79aa1-3d18-4f04-b7f9-a31fd69455a8","type":"ResetTool"},{"id":"27a5eb2f-2249-4b55-ae65-e778c2b2a9a6","type":"HelpTool"}]},"id":"3fc4f45d-2a8a-4b45-9e5e-d2c2774fed0e","type":"Toolbar"},{"attributes":{},"id":"cef74efd-c447-40e7-aec1-243d24796d4d","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d43a2091-6b6b-4960-ad5d-1a48a40e07b4","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"e4671448-accd-4ac7-bb70-d480f529442d","type":"Range1d"},{"attributes":{},"id":"fab39981-117a-4937-a08b-95da13f2bb64","type":"BasicTicker"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"e9ac780a-bdf4-43d8-8a36-9b4fb1d20522","type":"AnnularWedge"},{"attributes":{},"id":"a6020e40-efce-4db2-9ff0-bc14271afef7","type":"ToolEvents"},{"attributes":{},"id":"a48b1160-3033-41f3-b225-84b380d2a476","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"a91d5840-3086-4e77-b258-00bafc475726","type":"WheelZoomTool"},{"attributes":{"axis_label":null,"formatter":{"id":"a48b1160-3033-41f3-b225-84b380d2a476","type":"BasicTickFormatter"},"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"},"ticker":{"id":"fab39981-117a-4937-a08b-95da13f2bb64","type":"BasicTicker"},"visible":false},"id":"b52573fd-d9d6-4ea5-8f37-119da3c8a665","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e2b9149f-27a6-4dd7-955a-39dde36621df","type":"ColumnDataSource"},"glyph":{"id":"e9ac780a-bdf4-43d8-8a36-9b4fb1d20522","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c0a9e6e-07db-4ef1-9cf7-5dfc2b533e29","type":"GlyphRenderer"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd61f667-93ac-4adf-824c-a46d868a5f86","type":"Text"},{"attributes":{"below":[{"id":"b52573fd-d9d6-4ea5-8f37-119da3c8a665","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"970742ec-0dcd-4dd5-a78a-06fcbbd35b57","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d43a2091-6b6b-4960-ad5d-1a48a40e07b4","type":"BoxAnnotation"},{"id":"2c0a9e6e-07db-4ef1-9cf7-5dfc2b533e29","type":"GlyphRenderer"},{"id":"89e81799-10e8-4c7c-8467-ad52820f88e2","type":"GlyphRenderer"},{"id":"e48cc137-285f-40f0-9c0f-1226ef3e0e8d","type":"Legend"},{"id":"b52573fd-d9d6-4ea5-8f37-119da3c8a665","type":"LinearAxis"},{"id":"970742ec-0dcd-4dd5-a78a-06fcbbd35b57","type":"LinearAxis"}],"title":{"id":"0f0f8e56-d70c-47df-af11-ab469941f8d6","type":"Title"},"tool_events":{"id":"a6020e40-efce-4db2-9ff0-bc14271afef7","type":"ToolEvents"},"toolbar":{"id":"3fc4f45d-2a8a-4b45-9e5e-d2c2774fed0e","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"e4671448-accd-4ac7-bb70-d480f529442d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0f2c1399-fdbe-4d01-818e-5cb5ea301999","type":"Range1d"}},"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"},{"attributes":{"location":"top_left","plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"e48cc137-285f-40f0-9c0f-1226ef3e0e8d","type":"Legend"},{"attributes":{"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"6702ef8e-89ad-44dd-b2eb-01d099d4e4f7","type":"SaveTool"},{"attributes":{},"id":"ac8b5eb7-411d-4841-9f88-dad49e6c6ef0","type":"BasicTicker"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"0f2c1399-fdbe-4d01-818e-5cb5ea301999","type":"Range1d"},{"attributes":{"plot":null,"text":null},"id":"0f0f8e56-d70c-47df-af11-ab469941f8d6","type":"Title"},{"attributes":{"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"ffb79aa1-3d18-4f04-b7f9-a31fd69455a8","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["color","centers","values","abbr_medal","start","outers","end","inners","level"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":[1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25],"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":[0.37952126016520993,0.04216902890724555,0.12650708672173663,0.37952126016520993,1.0542257226811387,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.475916011753594,1.0963947515883843,1.3494089250318575,1.475916011753594,2.1084514453622774,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.530141734434733,2.319296589898505,2.445803676620242,2.530141734434733,3.373522312579644,2.8674939656926974,3.1205081391361706,3.373522312579644,4.174733861817309,3.6687055149303625,4.006057746188326,4.174733861817309,5.060283468869465,4.469917064168028,4.722931237611501,5.060283468869465,5.439804729034675,5.144621526683956,5.228959584498447,5.439804729034674,6.283185307179586,5.86149501810713,6.114509191550603,6.283185307179585],"inners":[0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5],"level":[0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0],"outers":[1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0],"start":[0.0,0.0,0.04216902890724555,0.12650708672173663,0.37952126016520993,0.37952126016520993,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.0542257226811387,1.0963947515883843,1.3494089250318575,1.475916011753594,1.475916011753594,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.1084514453622774,2.319296589898505,2.445803676620242,2.530141734434733,2.530141734434733,2.8674939656926974,3.1205081391361706,3.373522312579644,3.373522312579644,3.6687055149303625,4.006057746188326,4.174733861817309,4.174733861817309,4.469917064168028,4.722931237611501,5.060283468869465,5.060283468869465,5.144621526683956,5.228959584498447,5.439804729034675,5.439804729034674,5.86149501810713,6.114509191550603],"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"e2b9149f-27a6-4dd7-955a-39dde36621df","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"07d21086-0e95-4088-86d7-eb1d8458c003","type":"ColumnDataSource"},"glyph":{"id":"dd61f667-93ac-4adf-824c-a46d868a5f86","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"89e81799-10e8-4c7c-8467-ad52820f88e2","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"d43a2091-6b6b-4960-ad5d-1a48a40e07b4","type":"BoxAnnotation"},"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"}},"id":"d5ca0b19-9c34-4206-a592-d197fa57c294","type":"BoxZoomTool"},{"attributes":{"axis_label":null,"formatter":{"id":"cef74efd-c447-40e7-aec1-243d24796d4d","type":"BasicTickFormatter"},"plot":{"id":"f2d47ec7-1df6-48f6-b64f-54037fd731af","subtype":"Chart","type":"Plot"},"ticker":{"id":"ac8b5eb7-411d-4841-9f88-dad49e6c6ef0","type":"BasicTicker"},"visible":false},"id":"970742ec-0dcd-4dd5-a78a-06fcbbd35b57","type":"LinearAxis"}],"root_ids":["f2d47ec7-1df6-48f6-b64f-54037fd731af"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"ae6650f8-20af-480d-a3b5-4e4970659492","elementid":"c43015bb-3d3b-476b-a2a0-9bb783f45954","modelid":"f2d47ec7-1df6-48f6-b64f-54037fd731af"}];
                
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
