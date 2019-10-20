document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("9f6f2b83-4a9f-4d9d-affe-e3e1c78aab34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f6f2b83-4a9f-4d9d-affe-e3e1c78aab34' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ebe6cfc7-c8c5-43ae-9af4-83f44ce5e04c":{"roots":{"references":[{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"84362bb4-d961-4cea-989d-9dc398e7b165","type":"Range1d"},{"attributes":{"axis_label":null,"formatter":{"id":"21ea8108-96a7-4daa-80d0-bcbdf6699d42","type":"BasicTickFormatter"},"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"},"ticker":{"id":"935e891a-db58-4e07-ad9f-1623fd84b5c9","type":"BasicTicker"},"visible":false},"id":"b80fb815-55ce-4e87-92af-10e6914d0912","type":"LinearAxis"},{"attributes":{"data_source":{"id":"99cdf1d4-16a2-46c3-88ae-048119847d3b","type":"ColumnDataSource"},"glyph":{"id":"1fed7633-f4c3-4737-8e59-342c50b5d243","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2f437939-592d-4044-9eca-f98f0fe4fc52","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["end","inners","level","color","start","values","outers","abbr_medal","centers"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":[1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25],"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":[0.37952126016520993,0.04216902890724555,0.12650708672173663,0.37952126016520993,1.0542257226811387,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.475916011753594,1.0963947515883843,1.3494089250318575,1.475916011753594,2.1084514453622774,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.530141734434733,2.319296589898505,2.445803676620242,2.530141734434733,3.373522312579644,2.8674939656926974,3.1205081391361706,3.373522312579644,4.174733861817309,3.6687055149303625,4.006057746188326,4.174733861817309,5.060283468869465,4.469917064168028,4.722931237611501,5.060283468869465,5.439804729034675,5.144621526683956,5.228959584498447,5.439804729034674,6.283185307179586,5.86149501810713,6.114509191550603,6.283185307179585],"inners":[0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5],"level":[0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0],"outers":[1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0],"start":[0.0,0.0,0.04216902890724555,0.12650708672173663,0.37952126016520993,0.37952126016520993,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.0542257226811387,1.0963947515883843,1.3494089250318575,1.475916011753594,1.475916011753594,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.1084514453622774,2.319296589898505,2.445803676620242,2.530141734434733,2.530141734434733,2.8674939656926974,3.1205081391361706,3.373522312579644,3.373522312579644,3.6687055149303625,4.006057746188326,4.174733861817309,4.174733861817309,4.469917064168028,4.722931237611501,5.060283468869465,5.060283468869465,5.144621526683956,5.228959584498447,5.439804729034675,5.439804729034674,5.86149501810713,6.114509191550603],"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"e17147df-f57f-4180-aa4a-830444281d72","type":"ColumnDataSource"},{"attributes":{},"id":"4c7307a9-5859-4c20-85b6-fcf72826f1ff","type":"BasicTickFormatter"},{"attributes":{},"id":"935e891a-db58-4e07-ad9f-1623fd84b5c9","type":"BasicTicker"},{"attributes":{},"id":"9013569d-83d3-42e6-9024-1e050512717d","type":"ToolEvents"},{"attributes":{"location":"top_left","plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"48c9af8d-e633-4145-b2d1-319b05fc4b57","type":"Legend"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"3ba04893-dcec-40a8-814c-238725438d42","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"303d8f8d-4def-41a1-a5e6-40eb3dbb7ce7","type":"PanTool"},{"id":"3a3dd3a3-9d16-4ab7-bef4-762f5502768d","type":"WheelZoomTool"},{"id":"42a9dbaa-5b67-4713-bd6e-bf44495d4e64","type":"BoxZoomTool"},{"id":"52d9c9ac-18a5-4dd1-9a9d-b199b55f6a9b","type":"SaveTool"},{"id":"82f202bd-f05f-4023-9c95-5d70d88dd0f4","type":"ResetTool"},{"id":"d6263b62-9512-4b43-b63c-eb30aff1f994","type":"HelpTool"}]},"id":"2d968869-6234-4558-8bb8-7486e7cdc768","type":"Toolbar"},{"attributes":{"overlay":{"id":"86ce38a7-85bb-4f4e-8c20-5dcb54a42c1b","type":"BoxAnnotation"},"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"42a9dbaa-5b67-4713-bd6e-bf44495d4e64","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"303d8f8d-4def-41a1-a5e6-40eb3dbb7ce7","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","text_angle","text"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":[0.0,0.021084514453622773,0.0843380578144911,0.25301417344347327,0.0,0.46385931797970104,0.6325354336086833,0.8855496070521565,0.0,1.0753102371347616,1.222901838310121,1.4126624683927258,0.0,1.560254069568085,4.954860896601351,5.186790555591202,0.0,5.355466671220184,5.524142786849167,5.62956535911728,0.0,5.840410503653509,6.135593706004228,6.388607879447701,0.0,6.662706567344796,6.978974284149137,7.23198845759261,0.0,7.4639181165824615,7.738016804479558,4.891607353240483,0.0,5.10245249777671,5.186790555591202,5.33438215676656,0.0,5.650649873570902,5.988002104828866,6.198847249365095],"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"99cdf1d4-16a2-46c3-88ae-048119847d3b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e17147df-f57f-4180-aa4a-830444281d72","type":"ColumnDataSource"},"glyph":{"id":"b9cedb1e-a601-4114-b593-29e0877179d1","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"144582a9-0938-4dfc-b4be-593584ddcb79","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"0333db15-b36c-4af2-8de7-35600bbb67b9","type":"Title"},{"attributes":{},"id":"21ea8108-96a7-4daa-80d0-bcbdf6699d42","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"d6263b62-9512-4b43-b63c-eb30aff1f994","type":"HelpTool"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"b9cedb1e-a601-4114-b593-29e0877179d1","type":"AnnularWedge"},{"attributes":{"below":[{"id":"0bd30200-dcea-425f-bc70-e24f6dbf2ffc","type":"LinearAxis"}],"height":400,"left":[{"id":"b80fb815-55ce-4e87-92af-10e6914d0912","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"86ce38a7-85bb-4f4e-8c20-5dcb54a42c1b","type":"BoxAnnotation"},{"id":"144582a9-0938-4dfc-b4be-593584ddcb79","type":"GlyphRenderer"},{"id":"2f437939-592d-4044-9eca-f98f0fe4fc52","type":"GlyphRenderer"},{"id":"48c9af8d-e633-4145-b2d1-319b05fc4b57","type":"Legend"},{"id":"0bd30200-dcea-425f-bc70-e24f6dbf2ffc","type":"LinearAxis"},{"id":"b80fb815-55ce-4e87-92af-10e6914d0912","type":"LinearAxis"}],"title":{"id":"0333db15-b36c-4af2-8de7-35600bbb67b9","type":"Title"},"tool_events":{"id":"9013569d-83d3-42e6-9024-1e050512717d","type":"ToolEvents"},"toolbar":{"id":"2d968869-6234-4558-8bb8-7486e7cdc768","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"3ba04893-dcec-40a8-814c-238725438d42","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"84362bb4-d961-4cea-989d-9dc398e7b165","type":"Range1d"}},"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"82f202bd-f05f-4023-9c95-5d70d88dd0f4","type":"ResetTool"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1fed7633-f4c3-4737-8e59-342c50b5d243","type":"Text"},{"attributes":{"axis_label":null,"formatter":{"id":"4c7307a9-5859-4c20-85b6-fcf72826f1ff","type":"BasicTickFormatter"},"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"},"ticker":{"id":"a76336fd-8e66-40c1-aaec-e9540848ad49","type":"BasicTicker"},"visible":false},"id":"0bd30200-dcea-425f-bc70-e24f6dbf2ffc","type":"LinearAxis"},{"attributes":{},"id":"a76336fd-8e66-40c1-aaec-e9540848ad49","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"86ce38a7-85bb-4f4e-8c20-5dcb54a42c1b","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"52d9c9ac-18a5-4dd1-9a9d-b199b55f6a9b","type":"SaveTool"},{"attributes":{"plot":{"id":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf","subtype":"Chart","type":"Plot"}},"id":"3a3dd3a3-9d16-4ab7-bef4-762f5502768d","type":"WheelZoomTool"}],"root_ids":["3e939714-7b8f-4c7f-8f3c-54b4e553d4bf"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ebe6cfc7-c8c5-43ae-9af4-83f44ce5e04c","elementid":"9f6f2b83-4a9f-4d9d-affe-e3e1c78aab34","modelid":"3e939714-7b8f-4c7f-8f3c-54b4e553d4bf"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});