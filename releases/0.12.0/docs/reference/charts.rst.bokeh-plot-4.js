document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("a21ea249-09c0-4ebb-8662-db9e624f9945");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a21ea249-09c0-4ebb-8662-db9e624f9945' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"346eb962-f5bb-469d-93d3-e4914dc92f65":{"roots":{"references":[{"attributes":{"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"0dc998de-28e8-48af-8000-ef4b11c8ce1f","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"bc9fbebc-d88c-41f8-827d-063835490e1a","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e678b738-46e5-4a02-b2f0-e48bfd909bcc","type":"BoxAnnotation"},{"attributes":{},"id":"4744291d-1f05-4569-8d3c-02f80e62dc07","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"465d0cd1-6090-4e38-8d21-7f9a38f82352","type":"SaveTool"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"77667514-ec91-4933-8a48-d8ee601646fc","type":"Range1d"},{"attributes":{},"id":"c9823b2f-c745-4434-9d43-ac5f20acd6ef","type":"BasicTicker"},{"attributes":{},"id":"ca169458-1ec6-4d52-82e5-5d975450b3af","type":"BasicTicker"},{"attributes":{"location":"top_left","plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"2c1884c6-d934-4f41-9444-75bafcb7d00e","type":"Legend"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1acdf960-e059-4a5a-a3cb-e413384cc07f","type":"PanTool"},{"id":"0dc998de-28e8-48af-8000-ef4b11c8ce1f","type":"WheelZoomTool"},{"id":"dbd01a5e-fa1f-490c-a6bd-35c0b46be962","type":"BoxZoomTool"},{"id":"465d0cd1-6090-4e38-8d21-7f9a38f82352","type":"SaveTool"},{"id":"279d909c-af8e-4fdf-9240-72fd6f73df69","type":"ResetTool"},{"id":"eab91127-c65f-4823-8ff9-b05ed0d457bc","type":"HelpTool"}]},"id":"939e4f44-d5ae-4d7f-b7fc-72e5a758f6d4","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["end","inners","level","color","start","values","outers","abbr_medal","centers"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":[1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25],"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":[0.37952126016520993,0.04216902890724555,0.12650708672173663,0.37952126016520993,1.0542257226811387,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.475916011753594,1.0963947515883843,1.3494089250318575,1.475916011753594,2.1084514453622774,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.530141734434733,2.319296589898505,2.445803676620242,2.530141734434733,3.373522312579644,2.8674939656926974,3.1205081391361706,3.373522312579644,4.174733861817309,3.6687055149303625,4.006057746188326,4.174733861817309,5.060283468869465,4.469917064168028,4.722931237611501,5.060283468869465,5.439804729034675,5.144621526683956,5.228959584498447,5.439804729034674,6.283185307179586,5.86149501810713,6.114509191550603,6.283185307179585],"inners":[0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5],"level":[0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0],"outers":[1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0],"start":[0.0,0.0,0.04216902890724555,0.12650708672173663,0.37952126016520993,0.37952126016520993,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.0542257226811387,1.0963947515883843,1.3494089250318575,1.475916011753594,1.475916011753594,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.1084514453622774,2.319296589898505,2.445803676620242,2.530141734434733,2.530141734434733,2.8674939656926974,3.1205081391361706,3.373522312579644,3.373522312579644,3.6687055149303625,4.006057746188326,4.174733861817309,4.174733861817309,4.469917064168028,4.722931237611501,5.060283468869465,5.060283468869465,5.144621526683956,5.228959584498447,5.439804729034675,5.439804729034674,5.86149501810713,6.114509191550603],"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"be6a6c65-2996-409c-8af4-2fa0960ac9f0","type":"ColumnDataSource"},{"attributes":{},"id":"f8cfc7ed-938b-4da2-b1f6-8a2ac259cc8a","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"4f4ee70b-e64c-4fe7-8725-855409626aec","type":"AnnularWedge"},{"attributes":{"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"279d909c-af8e-4fdf-9240-72fd6f73df69","type":"ResetTool"},{"attributes":{},"id":"35bb1181-5ba7-4343-95ba-97b5b838cb1f","type":"ToolEvents"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"4d35bd89-05bb-43e1-9a7d-9f21242fb817","type":"Range1d"},{"attributes":{"data_source":{"id":"be6a6c65-2996-409c-8af4-2fa0960ac9f0","type":"ColumnDataSource"},"glyph":{"id":"4f4ee70b-e64c-4fe7-8725-855409626aec","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4e8b70fd-fb98-40e0-8af9-12f52a624ac3","type":"GlyphRenderer"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d04aff11-2696-45ef-93df-b9697f0815b1","type":"Text"},{"attributes":{"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"eab91127-c65f-4823-8ff9-b05ed0d457bc","type":"HelpTool"},{"attributes":{"overlay":{"id":"e678b738-46e5-4a02-b2f0-e48bfd909bcc","type":"BoxAnnotation"},"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"dbd01a5e-fa1f-490c-a6bd-35c0b46be962","type":"BoxZoomTool"},{"attributes":{"axis_label":null,"formatter":{"id":"f8cfc7ed-938b-4da2-b1f6-8a2ac259cc8a","type":"BasicTickFormatter"},"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"},"ticker":{"id":"c9823b2f-c745-4434-9d43-ac5f20acd6ef","type":"BasicTicker"},"visible":false},"id":"96da6ab7-a0f7-4498-9759-2a762dbf66ee","type":"LinearAxis"},{"attributes":{"axis_label":null,"formatter":{"id":"4744291d-1f05-4569-8d3c-02f80e62dc07","type":"BasicTickFormatter"},"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"},"ticker":{"id":"ca169458-1ec6-4d52-82e5-5d975450b3af","type":"BasicTicker"},"visible":false},"id":"b06056bb-e049-49bc-b1e9-e487ab3578a4","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c0f249de-7d86-413e-a4a5-9a746a102ac9","type":"ColumnDataSource"},"glyph":{"id":"d04aff11-2696-45ef-93df-b9697f0815b1","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b56f66f0-2124-4539-90bc-792ca236123c","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"b06056bb-e049-49bc-b1e9-e487ab3578a4","type":"LinearAxis"}],"height":400,"left":[{"id":"96da6ab7-a0f7-4498-9759-2a762dbf66ee","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e678b738-46e5-4a02-b2f0-e48bfd909bcc","type":"BoxAnnotation"},{"id":"4e8b70fd-fb98-40e0-8af9-12f52a624ac3","type":"GlyphRenderer"},{"id":"b56f66f0-2124-4539-90bc-792ca236123c","type":"GlyphRenderer"},{"id":"2c1884c6-d934-4f41-9444-75bafcb7d00e","type":"Legend"},{"id":"b06056bb-e049-49bc-b1e9-e487ab3578a4","type":"LinearAxis"},{"id":"96da6ab7-a0f7-4498-9759-2a762dbf66ee","type":"LinearAxis"}],"title":{"id":"bc9fbebc-d88c-41f8-827d-063835490e1a","type":"Title"},"tool_events":{"id":"35bb1181-5ba7-4343-95ba-97b5b838cb1f","type":"ToolEvents"},"toolbar":{"id":"939e4f44-d5ae-4d7f-b7fc-72e5a758f6d4","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"4d35bd89-05bb-43e1-9a7d-9f21242fb817","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"77667514-ec91-4933-8a48-d8ee601646fc","type":"Range1d"}},"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1","subtype":"Chart","type":"Plot"}},"id":"1acdf960-e059-4a5a-a3cb-e413384cc07f","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","text_angle","text"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":[0.0,0.021084514453622773,0.0843380578144911,0.25301417344347327,0.0,0.46385931797970104,0.6325354336086833,0.8855496070521565,0.0,1.0753102371347616,1.222901838310121,1.4126624683927258,0.0,1.560254069568085,4.954860896601351,5.186790555591202,0.0,5.355466671220184,5.524142786849167,5.62956535911728,0.0,5.840410503653509,6.135593706004228,6.388607879447701,0.0,6.662706567344796,6.978974284149137,7.23198845759261,0.0,7.4639181165824615,7.738016804479558,4.891607353240483,0.0,5.10245249777671,5.186790555591202,5.33438215676656,0.0,5.650649873570902,5.988002104828866,6.198847249365095],"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"c0f249de-7d86-413e-a4a5-9a746a102ac9","type":"ColumnDataSource"}],"root_ids":["88b7a37f-7a81-4878-86d4-ffdc6096f1f1"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"346eb962-f5bb-469d-93d3-e4914dc92f65","elementid":"a21ea249-09c0-4ebb-8662-db9e624f9945","modelid":"88b7a37f-7a81-4878-86d4-ffdc6096f1f1"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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