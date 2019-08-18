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
      };var element = document.getElementById("fdb34a73-a858-4895-b885-ec6e68424b17");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fdb34a73-a858-4895-b885-ec6e68424b17' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"be22f692-e98c-4f49-a993-7b9c745350ba":{"roots":{"references":[{"attributes":{},"id":"e24d8694-f344-40b7-a542-ed29792494a4","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"HP vs DISPL"},"id":"3befaa11-f0c4-470e-a0d4-8cea8f4b0286","type":"Title"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"0d6579f7-c96f-4de1-bed7-a8a740cb8bd1","type":"Range1d"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"cd757767-dab2-4e8f-b065-349cffb55d01","type":"BasicTickFormatter"},"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"},"ticker":{"id":"a405140b-e9a7-4c7a-bf73-1cddcccf9885","type":"BasicTicker"}},"id":"ab208458-eee7-45a4-8058-ddaa7912b5f7","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":{"__ndarray__":"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","dtype":"float64","shape":[392]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,95,95,97,85,88,46,87,90,95,113,90,215,200,210,193,88,90,95,100,105,100,88,100,165,175,153,150,180,170,175,110,72,100,88,86,90,70,76,65,69,60,70,95,80,54,90,86,165,175,150,153,150,208,155,160,190,97,150,130,140,150,112,76,87,69,86,92,97,80,88,175,150,145,137,150,198,150,158,150,215,225,175,105,100,100,88,95,46,150,167,170,180,100,88,72,94,90,85,107,90,145,230,49,75,91,112,150,110,122,180,95,100,100,67,80,65,75,100,110,105,140,150,150,140,150,83,67,78,52,61,75,75,75,97,93,67,95,105,72,72,170,145,150,148,110,105,110,95,110,110,129,75,83,100,78,96,71,97,97,70,90,95,88,98,115,53,86,81,92,79,83,140,150,120,152,100,105,81,90,52,60,70,53,100,78,110,95,71,70,75,72,102,150,88,108,120,180,145,130,150,68,80,58,96,70,145,110,145,130,110,105,100,98,180,170,190,149,78,88,75,89,63,83,67,78,97,110,110,48,66,52,70,60,110,140,139,105,95,85,88,100,90,105,85,110,120,145,165,139,140,68,95,97,75,95,105,85,97,103,125,115,133,71,68,115,85,88,90,110,130,129,138,135,155,142,125,150,71,65,80,80,77,125,71,90,70,70,65,69,90,115,115,90,76,60,70,65,90,88,90,90,78,90,75,92,75,65,105,65,48,48,67,67,67,67,62,132,100,88,72,84,84,92,110,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,76,116,120,110,105,88,85,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,110,85,92,112,96,84,90,86,52,84,79,82]}},"id":"a4de8018-9428-454c-a525-a35e83d27675","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"96609624-72be-4a66-82db-06a9a7fd06ed","type":"BoxAnnotation"},"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"45195706-23fa-4435-b5c1-fd1fa7508a96","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"a3e139f3-6d90-4de8-af28-8179adc2e93a","type":"PanTool"},{"attributes":{"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"85aff707-5a22-43f2-b464-fe0a8ee9e890","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"},"ticker":{"id":"0a77d117-286a-47fa-be23-4d9d011a5ce9","type":"BasicTicker"}},"id":"221ea549-69f9-42c1-889b-c87c9cbeb7ed","type":"Grid"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"e24d8694-f344-40b7-a542-ed29792494a4","type":"BasicTickFormatter"},"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"},"ticker":{"id":"0a77d117-286a-47fa-be23-4d9d011a5ce9","type":"BasicTicker"}},"id":"aaeac9d8-9cc2-40ee-a87f-bfb21e0445cb","type":"LinearAxis"},{"attributes":{"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"ea116636-393c-434e-990b-3bac398c999c","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96609624-72be-4a66-82db-06a9a7fd06ed","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"3acb21d1-ae04-440e-ad89-fb568a4c74cb","type":"Range1d"},{"attributes":{"below":[{"id":"ab208458-eee7-45a4-8058-ddaa7912b5f7","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"aaeac9d8-9cc2-40ee-a87f-bfb21e0445cb","type":"LinearAxis"}],"renderers":[{"id":"96609624-72be-4a66-82db-06a9a7fd06ed","type":"BoxAnnotation"},{"id":"5f49a2c7-ba56-4ff3-9561-bb689795d5d5","type":"GlyphRenderer"},{"id":"080c4109-f990-4b5c-8231-70c1df757278","type":"Legend"},{"id":"ab208458-eee7-45a4-8058-ddaa7912b5f7","type":"LinearAxis"},{"id":"aaeac9d8-9cc2-40ee-a87f-bfb21e0445cb","type":"LinearAxis"},{"id":"cc54f330-2f38-4a7c-99f1-9e988ea81bd8","type":"Grid"},{"id":"221ea549-69f9-42c1-889b-c87c9cbeb7ed","type":"Grid"}],"title":{"id":"3befaa11-f0c4-470e-a0d4-8cea8f4b0286","type":"Title"},"tool_events":{"id":"1800ff64-2b27-4fb6-b36c-5b1a82b8ec84","type":"ToolEvents"},"toolbar":{"id":"69c23481-7eac-4a11-aa82-6fed9c4ccb38","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"0d6579f7-c96f-4de1-bed7-a8a740cb8bd1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3acb21d1-ae04-440e-ad89-fb568a4c74cb","type":"Range1d"}},"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"},{"attributes":{"location":"top_left","plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"080c4109-f990-4b5c-8231-70c1df757278","type":"Legend"},{"attributes":{},"id":"0a77d117-286a-47fa-be23-4d9d011a5ce9","type":"BasicTicker"},{"attributes":{"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"f0893838-e937-42ad-ade7-982a9b6f4671","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"9d70cdd9-1e64-422a-96dc-4308cf225e7c","type":"Square"},{"attributes":{"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"},"ticker":{"id":"a405140b-e9a7-4c7a-bf73-1cddcccf9885","type":"BasicTicker"}},"id":"cc54f330-2f38-4a7c-99f1-9e988ea81bd8","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a3e139f3-6d90-4de8-af28-8179adc2e93a","type":"PanTool"},{"id":"f0893838-e937-42ad-ade7-982a9b6f4671","type":"WheelZoomTool"},{"id":"45195706-23fa-4435-b5c1-fd1fa7508a96","type":"BoxZoomTool"},{"id":"24c4667e-0a5d-4a73-a92b-bd33480d87bc","type":"SaveTool"},{"id":"85aff707-5a22-43f2-b464-fe0a8ee9e890","type":"ResetTool"},{"id":"ea116636-393c-434e-990b-3bac398c999c","type":"HelpTool"}]},"id":"69c23481-7eac-4a11-aa82-6fed9c4ccb38","type":"Toolbar"},{"attributes":{},"id":"a405140b-e9a7-4c7a-bf73-1cddcccf9885","type":"BasicTicker"},{"attributes":{},"id":"cd757767-dab2-4e8f-b065-349cffb55d01","type":"BasicTickFormatter"},{"attributes":{},"id":"1800ff64-2b27-4fb6-b36c-5b1a82b8ec84","type":"ToolEvents"},{"attributes":{"data_source":{"id":"a4de8018-9428-454c-a525-a35e83d27675","type":"ColumnDataSource"},"glyph":{"id":"9d70cdd9-1e64-422a-96dc-4308cf225e7c","type":"Square"},"hover_glyph":null,"muted_glyph":null},"id":"5f49a2c7-ba56-4ff3-9561-bb689795d5d5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab","subtype":"Chart","type":"Plot"}},"id":"24c4667e-0a5d-4a73-a92b-bd33480d87bc","type":"SaveTool"}],"root_ids":["9ea74d60-c62b-4a14-95fd-5560c3aea4ab"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"be22f692-e98c-4f49-a993-7b9c745350ba","elementid":"fdb34a73-a858-4895-b885-ec6e68424b17","modelid":"9ea74d60-c62b-4a14-95fd-5560c3aea4ab"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
