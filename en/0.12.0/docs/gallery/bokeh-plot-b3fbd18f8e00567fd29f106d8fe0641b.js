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
      };var element = document.getElementById("2d81b582-aba1-46b6-8626-da0557431c68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d81b582-aba1-46b6-8626-da0557431c68' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"fc28b276-0be9-4bdf-a7b6-3c6e006b2296":{"roots":{"references":[{"attributes":{"location":"top_left","plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"08356097-00c4-444a-826d-01a09883e5bf","type":"Legend"},{"attributes":{"axis_label":null,"formatter":{"id":"d4106f09-25bb-4a09-a99b-952c409af9f8","type":"BasicTickFormatter"},"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"},"ticker":{"id":"50a2938e-89d9-47aa-816c-f1fad04463ce","type":"BasicTicker"},"visible":false},"id":"e1a37985-2954-46b2-9d48-b49d5398f655","type":"LinearAxis"},{"attributes":{"data_source":{"id":"66527103-15a9-4561-b821-4b2ce5674258","type":"ColumnDataSource"},"glyph":{"id":"a92b526b-ccc3-4574-b42b-41bd1048cb4f","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d556f8b9-f33d-4a66-8c34-e62a81b1279a","type":"GlyphRenderer"},{"attributes":{},"id":"fba6d50f-3458-45be-8a71-8cf241992306","type":"ToolEvents"},{"attributes":{"below":[{"id":"918c83c1-5d57-418a-8e0f-470ea5b2da2f","type":"LinearAxis"}],"height":400,"left":[{"id":"e1a37985-2954-46b2-9d48-b49d5398f655","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a0943190-4678-43c0-bf16-98e5e728d2ba","type":"BoxAnnotation"},{"id":"4f920bee-1261-44c4-a86f-916b09978ec9","type":"GlyphRenderer"},{"id":"d556f8b9-f33d-4a66-8c34-e62a81b1279a","type":"GlyphRenderer"},{"id":"08356097-00c4-444a-826d-01a09883e5bf","type":"Legend"},{"id":"918c83c1-5d57-418a-8e0f-470ea5b2da2f","type":"LinearAxis"},{"id":"e1a37985-2954-46b2-9d48-b49d5398f655","type":"LinearAxis"}],"title":{"id":"711e4a3e-0ca4-42c0-bc9c-3aae6beab2c9","type":"Title"},"tool_events":{"id":"fba6d50f-3458-45be-8a71-8cf241992306","type":"ToolEvents"},"toolbar":{"id":"ac904b33-5339-4960-915d-60169baddf40","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"3dca0b66-8083-4019-8b32-34d3b30ceabf","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"215206a7-736d-4bdd-8f2e-dc160342ea61","type":"Range1d"}},"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"b56a35e2-d5ad-42ec-8a28-e3d638ceaa3d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"1860d94b-d738-44c9-8947-5729e6223a31","type":"SaveTool"},{"attributes":{"axis_label":null,"formatter":{"id":"b56a35e2-d5ad-42ec-8a28-e3d638ceaa3d","type":"BasicTickFormatter"},"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"},"ticker":{"id":"e79c2820-2ae5-461d-ae3a-35d75a3ea6a2","type":"BasicTicker"},"visible":false},"id":"918c83c1-5d57-418a-8e0f-470ea5b2da2f","type":"LinearAxis"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a92b526b-ccc3-4574-b42b-41bd1048cb4f","type":"Text"},{"attributes":{"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"946a57c9-a6d7-4a32-b336-410918d95b40","type":"PanTool"},{"attributes":{"overlay":{"id":"a0943190-4678-43c0-bf16-98e5e728d2ba","type":"BoxAnnotation"},"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"25f3dbdd-be29-47ea-9db1-97c4a2ec854b","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"3dca0b66-8083-4019-8b32-34d3b30ceabf","type":"Range1d"},{"attributes":{"callback":null,"column_names":["end","inners","level","color","start","values","outers","abbr_medal","centers"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":[1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25,1.125,2.25,2.25,2.25],"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":[0.37952126016520993,0.04216902890724555,0.12650708672173663,0.37952126016520993,1.0542257226811387,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.475916011753594,1.0963947515883843,1.3494089250318575,1.475916011753594,2.1084514453622774,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.530141734434733,2.319296589898505,2.445803676620242,2.530141734434733,3.373522312579644,2.8674939656926974,3.1205081391361706,3.373522312579644,4.174733861817309,3.6687055149303625,4.006057746188326,4.174733861817309,5.060283468869465,4.469917064168028,4.722931237611501,5.060283468869465,5.439804729034675,5.144621526683956,5.228959584498447,5.439804729034674,6.283185307179586,5.86149501810713,6.114509191550603,6.283185307179585],"inners":[0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5,0.0,1.5,1.5,1.5],"level":[0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0],"outers":[1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0,1.5,3.0,3.0,3.0],"start":[0.0,0.0,0.04216902890724555,0.12650708672173663,0.37952126016520993,0.37952126016520993,0.5481973757941921,0.7168734914231744,1.0542257226811387,1.0542257226811387,1.0963947515883843,1.3494089250318575,1.475916011753594,1.475916011753594,1.6445921273825763,1.9819443586405407,2.1084514453622774,2.1084514453622774,2.319296589898505,2.445803676620242,2.530141734434733,2.530141734434733,2.8674939656926974,3.1205081391361706,3.373522312579644,3.373522312579644,3.6687055149303625,4.006057746188326,4.174733861817309,4.174733861817309,4.469917064168028,4.722931237611501,5.060283468869465,5.060283468869465,5.144621526683956,5.228959584498447,5.439804729034675,5.439804729034674,5.86149501810713,6.114509191550603],"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"5f57d279-2f07-4e82-92ba-b8d256bd8db8","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"946a57c9-a6d7-4a32-b336-410918d95b40","type":"PanTool"},{"id":"93ae56f8-cbf9-4f62-8c32-8e6c400fb3ce","type":"WheelZoomTool"},{"id":"25f3dbdd-be29-47ea-9db1-97c4a2ec854b","type":"BoxZoomTool"},{"id":"1860d94b-d738-44c9-8947-5729e6223a31","type":"SaveTool"},{"id":"aea00f9c-c7df-4ef1-ba81-5acbe6cc7ce7","type":"ResetTool"},{"id":"77978bfd-585c-4a3e-af54-a029e42df9bc","type":"HelpTool"}]},"id":"ac904b33-5339-4960-915d-60169baddf40","type":"Toolbar"},{"attributes":{},"id":"50a2938e-89d9-47aa-816c-f1fad04463ce","type":"BasicTicker"},{"attributes":{},"id":"e79c2820-2ae5-461d-ae3a-35d75a3ea6a2","type":"BasicTicker"},{"attributes":{"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"77978bfd-585c-4a3e-af54-a029e42df9bc","type":"HelpTool"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"85bf0932-35f0-44ec-9a30-fba189246a44","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"5f57d279-2f07-4e82-92ba-b8d256bd8db8","type":"ColumnDataSource"},"glyph":{"id":"85bf0932-35f0-44ec-9a30-fba189246a44","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4f920bee-1261-44c4-a86f-916b09978ec9","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0943190-4678-43c0-bf16-98e5e728d2ba","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","text_angle","text"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":[0.0,0.021084514453622773,0.0843380578144911,0.25301417344347327,0.0,0.46385931797970104,0.6325354336086833,0.8855496070521565,0.0,1.0753102371347616,1.222901838310121,1.4126624683927258,0.0,1.560254069568085,4.954860896601351,5.186790555591202,0.0,5.355466671220184,5.524142786849167,5.62956535911728,0.0,5.840410503653509,6.135593706004228,6.388607879447701,0.0,6.662706567344796,6.978974284149137,7.23198845759261,0.0,7.4639181165824615,7.738016804479558,4.891607353240483,0.0,5.10245249777671,5.186790555591202,5.33438215676656,0.0,5.650649873570902,5.988002104828866,6.198847249365095],"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"66527103-15a9-4561-b821-4b2ce5674258","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"aea00f9c-c7df-4ef1-ba81-5acbe6cc7ce7","type":"ResetTool"},{"attributes":{"plot":{"id":"6f214d48-793a-415b-bdd4-1b21c8918294","subtype":"Chart","type":"Plot"}},"id":"93ae56f8-cbf9-4f62-8c32-8e6c400fb3ce","type":"WheelZoomTool"},{"attributes":{},"id":"d4106f09-25bb-4a09-a99b-952c409af9f8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"215206a7-736d-4bdd-8f2e-dc160342ea61","type":"Range1d"},{"attributes":{"plot":null,"text":null},"id":"711e4a3e-0ca4-42c0-bc9c-3aae6beab2c9","type":"Title"}],"root_ids":["6f214d48-793a-415b-bdd4-1b21c8918294"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"fc28b276-0be9-4bdf-a7b6-3c6e006b2296","elementid":"2d81b582-aba1-46b6-8626-da0557431c68","modelid":"6f214d48-793a-415b-bdd4-1b21c8918294"}];
              
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