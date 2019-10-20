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
      };var element = document.getElementById("05ef72b8-70d8-4d02-951b-972d247f7272");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '05ef72b8-70d8-4d02-951b-972d247f7272' but no matching script tag was found. ")
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
                var docs_json = {"67f4d325-c6e7-4e4b-99c7-7e276dd7d349":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a646691c-d43b-4eaf-b0e8-fa7916c87942","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"6d139bf2-a507-421c-8522-766249341f87","type":"Range1d"},{"attributes":{"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"0c11a0d0-f453-4a4a-956e-87e8ae46006a","type":"HelpTool"},{"attributes":{},"id":"1bde695d-19b1-42f4-a668-50cfd2e5b5f2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"d375c8fe-68bf-4f86-858f-6789379681d0","type":"Range1d"},{"attributes":{},"id":"83f5e896-a136-4379-a091-cdc8febedb4c","type":"BasicTicker"},{"attributes":{"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"},"ticker":{"id":"83f5e896-a136-4379-a091-cdc8febedb4c","type":"BasicTicker"}},"id":"c9928262-0063-418e-975c-401c8c280bb2","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"},"ticker":{"id":"e58fa39d-f68c-4e69-bca4-5f2952b201d6","type":"BasicTicker"}},"id":"e0927df6-a02b-4c4e-a6c3-3b78e84b192a","type":"Grid"},{"attributes":{"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"c1f8a0e9-a7ee-4282-b7d9-8d97c67918d8","type":"SaveTool"},{"attributes":{"below":[{"id":"1f09ffc0-0a34-47c3-a904-b311538cbba4","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"7c93db30-fd3b-4022-bafd-aa690b878bc1","type":"LinearAxis"}],"renderers":[{"id":"a646691c-d43b-4eaf-b0e8-fa7916c87942","type":"BoxAnnotation"},{"id":"30aecb5d-7225-4f86-896c-bf6a442b7d96","type":"GlyphRenderer"},{"id":"934b80c4-9e23-451d-b811-947c10d5ace2","type":"Legend"},{"id":"1f09ffc0-0a34-47c3-a904-b311538cbba4","type":"LinearAxis"},{"id":"7c93db30-fd3b-4022-bafd-aa690b878bc1","type":"LinearAxis"},{"id":"c9928262-0063-418e-975c-401c8c280bb2","type":"Grid"},{"id":"e0927df6-a02b-4c4e-a6c3-3b78e84b192a","type":"Grid"}],"title":{"id":"afdfd528-5f25-4e6c-bd17-97ee967dc34e","type":"Title"},"tool_events":{"id":"be05b220-5afb-4699-9048-1d9297ef5715","type":"ToolEvents"},"toolbar":{"id":"034c36dc-c60b-4b2a-abac-1844e13114ee","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"d375c8fe-68bf-4f86-858f-6789379681d0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"6d139bf2-a507-421c-8522-766249341f87","type":"Range1d"}},"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e5fad5ed-663b-4ecb-a730-2fb1b0151a5f","type":"PanTool"},{"id":"20ad187a-1db3-4840-8daa-a3eb07730b93","type":"WheelZoomTool"},{"id":"ba88ae23-23aa-4af4-985f-571715996e76","type":"BoxZoomTool"},{"id":"c1f8a0e9-a7ee-4282-b7d9-8d97c67918d8","type":"SaveTool"},{"id":"92fdcb3a-3d27-47fe-8cc5-215c673cdeac","type":"ResetTool"},{"id":"0c11a0d0-f453-4a4a-956e-87e8ae46006a","type":"HelpTool"}]},"id":"034c36dc-c60b-4b2a-abac-1844e13114ee","type":"Toolbar"},{"attributes":{},"id":"12bde31a-3ecc-4aeb-95aa-c3898ac9f79c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"20ad187a-1db3-4840-8daa-a3eb07730b93","type":"WheelZoomTool"},{"attributes":{"location":"top_left","plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"934b80c4-9e23-451d-b811-947c10d5ace2","type":"Legend"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"12bde31a-3ecc-4aeb-95aa-c3898ac9f79c","type":"BasicTickFormatter"},"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"},"ticker":{"id":"83f5e896-a136-4379-a091-cdc8febedb4c","type":"BasicTicker"}},"id":"1f09ffc0-0a34-47c3-a904-b311538cbba4","type":"LinearAxis"},{"attributes":{},"id":"be05b220-5afb-4699-9048-1d9297ef5715","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3ef9c83e-3236-4005-86ad-fd9429299c30","type":"Square"},{"attributes":{"overlay":{"id":"a646691c-d43b-4eaf-b0e8-fa7916c87942","type":"BoxAnnotation"},"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"ba88ae23-23aa-4af4-985f-571715996e76","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"92fdcb3a-3d27-47fe-8cc5-215c673cdeac","type":"ResetTool"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"1bde695d-19b1-42f4-a668-50cfd2e5b5f2","type":"BasicTickFormatter"},"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"},"ticker":{"id":"e58fa39d-f68c-4e69-bca4-5f2952b201d6","type":"BasicTicker"}},"id":"7c93db30-fd3b-4022-bafd-aa690b878bc1","type":"LinearAxis"},{"attributes":{},"id":"e58fa39d-f68c-4e69-bca4-5f2952b201d6","type":"BasicTicker"},{"attributes":{"plot":{"id":"e6d36c7b-d80f-49ad-a46e-8e681bab893d","subtype":"Chart","type":"Plot"}},"id":"e5fad5ed-663b-4ecb-a730-2fb1b0151a5f","type":"PanTool"},{"attributes":{"plot":null,"text":"HP vs DISPL"},"id":"afdfd528-5f25-4e6c-bd17-97ee967dc34e","type":"Title"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":{"__ndarray__":"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","dtype":"float64","shape":[392]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,95,95,97,85,88,46,87,90,95,113,90,215,200,210,193,88,90,95,100,105,100,88,100,165,175,153,150,180,170,175,110,72,100,88,86,90,70,76,65,69,60,70,95,80,54,90,86,165,175,150,153,150,208,155,160,190,97,150,130,140,150,112,76,87,69,86,92,97,80,88,175,150,145,137,150,198,150,158,150,215,225,175,105,100,100,88,95,46,150,167,170,180,100,88,72,94,90,85,107,90,145,230,49,75,91,112,150,110,122,180,95,100,100,67,80,65,75,100,110,105,140,150,150,140,150,83,67,78,52,61,75,75,75,97,93,67,95,105,72,72,170,145,150,148,110,105,110,95,110,110,129,75,83,100,78,96,71,97,97,70,90,95,88,98,115,53,86,81,92,79,83,140,150,120,152,100,105,81,90,52,60,70,53,100,78,110,95,71,70,75,72,102,150,88,108,120,180,145,130,150,68,80,58,96,70,145,110,145,130,110,105,100,98,180,170,190,149,78,88,75,89,63,83,67,78,97,110,110,48,66,52,70,60,110,140,139,105,95,85,88,100,90,105,85,110,120,145,165,139,140,68,95,97,75,95,105,85,97,103,125,115,133,71,68,115,85,88,90,110,130,129,138,135,155,142,125,150,71,65,80,80,77,125,71,90,70,70,65,69,90,115,115,90,76,60,70,65,90,88,90,90,78,90,75,92,75,65,105,65,48,48,67,67,67,67,62,132,100,88,72,84,84,92,110,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,76,116,120,110,105,88,85,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,110,85,92,112,96,84,90,86,52,84,79,82]}},"id":"7ce03055-c19c-4cdc-8308-58503ce4edae","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7ce03055-c19c-4cdc-8308-58503ce4edae","type":"ColumnDataSource"},"glyph":{"id":"3ef9c83e-3236-4005-86ad-fd9429299c30","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"30aecb5d-7225-4f86-896c-bf6a442b7d96","type":"GlyphRenderer"}],"root_ids":["e6d36c7b-d80f-49ad-a46e-8e681bab893d"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"67f4d325-c6e7-4e4b-99c7-7e276dd7d349","elementid":"05ef72b8-70d8-4d02-951b-972d247f7272","modelid":"e6d36c7b-d80f-49ad-a46e-8e681bab893d"}];
                
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
