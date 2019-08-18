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
      };var element = document.getElementById("7632f867-e4d9-41d7-9111-84bcef1230af");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7632f867-e4d9-41d7-9111-84bcef1230af' but no matching script tag was found. ")
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
                var docs_json = {"68af3349-c1f4-49a5-af7c-2f8411af249a":{"roots":{"references":[{"attributes":{"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"0dd8130c-271c-42d3-964a-fc42dde4367e","type":"HelpTool"},{"attributes":{"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"},"ticker":{"id":"dcc4ef0f-5312-4b73-8352-3818a05cd284","type":"BasicTicker"}},"id":"f38104e3-1202-4ba7-8b3d-cb12a966ad5b","type":"Grid"},{"attributes":{"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"4eff7e4d-aa58-443d-8a44-bc5900b7fd04","type":"WheelZoomTool"},{"attributes":{"location":"top_left","plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"a62878ea-8382-44f8-b5c2-67b5722558d8","type":"Legend"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQAAAAAAAADtAAAAAAAAAPEAAAAAAAAA5QAAAAAAAADNAAAAAAAAAMEAAAAAAAAAxQAAAAAAAADNAAAAAAAAAMkAAAAAAAAAsQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAADJAAAAAAAAANkAAAAAAAAAzQAAAAAAAADJAAAAAAAAAN0AAAAAAAAA8QAAAAAAAAD5AAAAAAAAAPkAAAAAAAAA/QAAAAAAAgEFAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA3QAAAAAAAADRAAAAAAAAANUAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADFAAAAAAAAAJkAAAAAAAAAqQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADVAAAAAAAAAOkAAAAAAAAA2QAAAAAAAADxAAAAAAAAAN0AAAAAAAAA8QAAAAAAAADtAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAA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","dtype":"float64","shape":[392]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,95,95,97,85,88,46,87,90,95,113,90,215,200,210,193,88,90,95,100,105,100,88,100,165,175,153,150,180,170,175,110,72,100,88,86,90,70,76,65,69,60,70,95,80,54,90,86,165,175,150,153,150,208,155,160,190,97,150,130,140,150,112,76,87,69,86,92,97,80,88,175,150,145,137,150,198,150,158,150,215,225,175,105,100,100,88,95,46,150,167,170,180,100,88,72,94,90,85,107,90,145,230,49,75,91,112,150,110,122,180,95,100,100,67,80,65,75,100,110,105,140,150,150,140,150,83,67,78,52,61,75,75,75,97,93,67,95,105,72,72,170,145,150,148,110,105,110,95,110,110,129,75,83,100,78,96,71,97,97,70,90,95,88,98,115,53,86,81,92,79,83,140,150,120,152,100,105,81,90,52,60,70,53,100,78,110,95,71,70,75,72,102,150,88,108,120,180,145,130,150,68,80,58,96,70,145,110,145,130,110,105,100,98,180,170,190,149,78,88,75,89,63,83,67,78,97,110,110,48,66,52,70,60,110,140,139,105,95,85,88,100,90,105,85,110,120,145,165,139,140,68,95,97,75,95,105,85,97,103,125,115,133,71,68,115,85,88,90,110,130,129,138,135,155,142,125,150,71,65,80,80,77,125,71,90,70,70,65,69,90,115,115,90,76,60,70,65,90,88,90,90,78,90,75,92,75,65,105,65,48,48,67,67,67,67,62,132,100,88,72,84,84,92,110,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,76,116,120,110,105,88,85,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,110,85,92,112,96,84,90,86,52,84,79,82]}},"id":"c465272d-cdab-40bf-b89e-3983f91c4fa2","type":"ColumnDataSource"},{"attributes":{},"id":"dc7a75ff-85c5-49a5-a4eb-97429907da0e","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"},"ticker":{"id":"67aae239-419b-4c69-97af-07cec8e757ce","type":"BasicTicker"}},"id":"f48da1d6-8f0a-424f-a2ab-ec2bf2e5fed5","type":"Grid"},{"attributes":{"data_source":{"id":"c465272d-cdab-40bf-b89e-3983f91c4fa2","type":"ColumnDataSource"},"glyph":{"id":"f053aa57-d1ca-4d07-aed9-0377eb9e21fa","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"a9e47fed-9fa2-44df-a8a4-865bc541e687","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"8c5536d3-d911-4010-9a80-f1afd7603937","type":"SaveTool"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"028bec14-41a8-4c8f-a651-caa3ca2e093c","type":"Range1d"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"3fd8587a-14a7-4796-bd05-944a66e03ea7","type":"BasicTickFormatter"},"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"},"ticker":{"id":"67aae239-419b-4c69-97af-07cec8e757ce","type":"BasicTicker"}},"id":"2b9721ae-a3c0-4f80-b745-d0c2719d2323","type":"LinearAxis"},{"attributes":{"below":[{"id":"d37513a9-9115-4b41-a07c-219c68ae51a2","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"2b9721ae-a3c0-4f80-b745-d0c2719d2323","type":"LinearAxis"}],"renderers":[{"id":"b7c6bc21-4c31-4198-afdc-f3463c3bdb12","type":"BoxAnnotation"},{"id":"a9e47fed-9fa2-44df-a8a4-865bc541e687","type":"GlyphRenderer"},{"id":"a62878ea-8382-44f8-b5c2-67b5722558d8","type":"Legend"},{"id":"d37513a9-9115-4b41-a07c-219c68ae51a2","type":"LinearAxis"},{"id":"2b9721ae-a3c0-4f80-b745-d0c2719d2323","type":"LinearAxis"},{"id":"f38104e3-1202-4ba7-8b3d-cb12a966ad5b","type":"Grid"},{"id":"f48da1d6-8f0a-424f-a2ab-ec2bf2e5fed5","type":"Grid"}],"title":{"id":"7fb5ba9a-cd87-4593-bee0-be72149df016","type":"Title"},"tool_events":{"id":"dc7a75ff-85c5-49a5-a4eb-97429907da0e","type":"ToolEvents"},"toolbar":{"id":"a22ad67a-d9c0-4735-b9d2-ce48f350cf78","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"028bec14-41a8-4c8f-a651-caa3ca2e093c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"246d00d5-6601-4639-8c3f-ae46696888e2","type":"Range1d"}},"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f053aa57-d1ca-4d07-aed9-0377eb9e21fa","type":"Circle"},{"attributes":{"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"b723cffc-7da5-48f4-8dce-8caadc2214cb","type":"ResetTool"},{"attributes":{},"id":"3fd8587a-14a7-4796-bd05-944a66e03ea7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"7fb5ba9a-cd87-4593-bee0-be72149df016","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b7c6bc21-4c31-4198-afdc-f3463c3bdb12","type":"BoxAnnotation"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"7f512569-07c0-4b3c-ad85-de8c495aaf68","type":"BasicTickFormatter"},"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"},"ticker":{"id":"dcc4ef0f-5312-4b73-8352-3818a05cd284","type":"BasicTicker"}},"id":"d37513a9-9115-4b41-a07c-219c68ae51a2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"661c3874-e68e-4a4d-8ed1-9bb434270cc7","type":"PanTool"},{"id":"4eff7e4d-aa58-443d-8a44-bc5900b7fd04","type":"WheelZoomTool"},{"id":"97f306d2-f54e-4b01-8d48-3150d2842ddd","type":"BoxZoomTool"},{"id":"8c5536d3-d911-4010-9a80-f1afd7603937","type":"SaveTool"},{"id":"b723cffc-7da5-48f4-8dce-8caadc2214cb","type":"ResetTool"},{"id":"0dd8130c-271c-42d3-964a-fc42dde4367e","type":"HelpTool"}]},"id":"a22ad67a-d9c0-4735-b9d2-ce48f350cf78","type":"Toolbar"},{"attributes":{},"id":"7f512569-07c0-4b3c-ad85-de8c495aaf68","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b7c6bc21-4c31-4198-afdc-f3463c3bdb12","type":"BoxAnnotation"},"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"97f306d2-f54e-4b01-8d48-3150d2842ddd","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"246d00d5-6601-4639-8c3f-ae46696888e2","type":"Range1d"},{"attributes":{},"id":"dcc4ef0f-5312-4b73-8352-3818a05cd284","type":"BasicTicker"},{"attributes":{},"id":"67aae239-419b-4c69-97af-07cec8e757ce","type":"BasicTicker"},{"attributes":{"plot":{"id":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86","subtype":"Chart","type":"Plot"}},"id":"661c3874-e68e-4a4d-8ed1-9bb434270cc7","type":"PanTool"}],"root_ids":["5ae49d13-6ff2-4484-b70c-ba33c6fe8a86"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"68af3349-c1f4-49a5-af7c-2f8411af249a","elementid":"7632f867-e4d9-41d7-9111-84bcef1230af","modelid":"5ae49d13-6ff2-4484-b70c-ba33c6fe8a86"}];
                
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
