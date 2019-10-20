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
      };var element = document.getElementById("cd6a9393-ad7d-4359-b76f-ffd93e618d51");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd6a9393-ad7d-4359-b76f-ffd93e618d51' but no matching script tag was found. ")
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
                var docs_json = {"d6a0e7e6-99b0-4a0f-ad9f-ed4a490a2844":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"22fb841f-1638-4d2c-96ba-6d7bed3dc22f","type":"BasicTicker"}},"id":"5bdf6d71-9f8f-453b-a0b9-996d4dc3203b","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"52bc17e2-cae3-43f2-b419-dd6577e97134","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"f1712e0f-5564-488c-b720-8f94cc166f8e","type":"BoxAnnotation"},"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"}},"id":"6fee9992-23f6-4241-b6ea-f015fcd9edd4","type":"BoxZoomTool"},{"attributes":{},"id":"4a5b56e0-f4f2-4ff2-87fc-31806e9de66e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4a5b56e0-f4f2-4ff2-87fc-31806e9de66e","type":"BasicTickFormatter"},"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"0459165b-4af6-48bf-8167-3582c30e5847","type":"BasicTicker"}},"id":"8d12ba6d-2dfa-4e66-a54f-7d97551cbedf","type":"LinearAxis"},{"attributes":{},"id":"6d106744-9a1c-4d21-a267-fb643b457ced","type":"ToolEvents"},{"attributes":{"formatter":{"id":"ae5013d8-a70f-411d-bb83-b6bd6270f5ea","type":"BasicTickFormatter"},"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"22fb841f-1638-4d2c-96ba-6d7bed3dc22f","type":"BasicTicker"}},"id":"b935bb9d-0d58-4914-bfd8-99b3c7d35d46","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"2bfc801c-dd58-46fe-ae89-5000c7b8e73f","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"2bfc801c-dd58-46fe-ae89-5000c7b8e73f","type":"PolyAnnotation"},"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"}},"id":"6cc6081b-601f-4de2-9aa7-c03aaac14899","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"},"ticker":{"id":"0459165b-4af6-48bf-8167-3582c30e5847","type":"BasicTicker"}},"id":"eca89528-d63e-41f7-8f5e-f90cbdb99f8f","type":"Grid"},{"attributes":{"below":[{"id":"8d12ba6d-2dfa-4e66-a54f-7d97551cbedf","type":"LinearAxis"}],"left":[{"id":"b935bb9d-0d58-4914-bfd8-99b3c7d35d46","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8d12ba6d-2dfa-4e66-a54f-7d97551cbedf","type":"LinearAxis"},{"id":"eca89528-d63e-41f7-8f5e-f90cbdb99f8f","type":"Grid"},{"id":"b935bb9d-0d58-4914-bfd8-99b3c7d35d46","type":"LinearAxis"},{"id":"5bdf6d71-9f8f-453b-a0b9-996d4dc3203b","type":"Grid"},{"id":"52bc17e2-cae3-43f2-b419-dd6577e97134","type":"BoxAnnotation"},{"id":"f1712e0f-5564-488c-b720-8f94cc166f8e","type":"BoxAnnotation"},{"id":"2bfc801c-dd58-46fe-ae89-5000c7b8e73f","type":"PolyAnnotation"},{"id":"8d3cbbc4-327f-4124-8028-13d61036a765","type":"GlyphRenderer"}],"title":{"id":"661d6ec5-0ee7-4318-b71c-9b634448827c","type":"Title"},"tool_events":{"id":"6d106744-9a1c-4d21-a267-fb643b457ced","type":"ToolEvents"},"toolbar":{"id":"06c3d98c-6896-45e0-8727-efe6ff2218e5","type":"Toolbar"},"x_range":{"id":"bb0bf3f5-156c-45d9-aa57-e24242ab8b7e","type":"DataRange1d"},"y_range":{"id":"9dedac97-bcc0-40ce-8825-31c5e409fde2","type":"DataRange1d"}},"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"783bc27f-b8fb-4b8a-80e1-2b26fa7d3a78","type":"BoxSelectTool"},{"id":"6fee9992-23f6-4241-b6ea-f015fcd9edd4","type":"BoxZoomTool"},{"id":"6cc6081b-601f-4de2-9aa7-c03aaac14899","type":"LassoSelectTool"},{"id":"3603a457-675d-41a9-8f26-787dd0252842","type":"ResetTool"}]},"id":"06c3d98c-6896-45e0-8727-efe6ff2218e5","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"a846f638-fea6-4379-b6c3-a8118a14f88e","type":"Circle"},{"attributes":{},"id":"22fb841f-1638-4d2c-96ba-6d7bed3dc22f","type":"BasicTicker"},{"attributes":{},"id":"ae5013d8-a70f-411d-bb83-b6bd6270f5ea","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9dedac97-bcc0-40ce-8825-31c5e409fde2","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"f9ae35cd-1b40-4591-985a-794bf10e1b5e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"661d6ec5-0ee7-4318-b71c-9b634448827c","type":"Title"},{"attributes":{"callback":null},"id":"bb0bf3f5-156c-45d9-aa57-e24242ab8b7e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"f9ae35cd-1b40-4591-985a-794bf10e1b5e","type":"ColumnDataSource"},"glyph":{"id":"f496632c-796e-4638-b613-d9ff3ab48dc5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a846f638-fea6-4379-b6c3-a8118a14f88e","type":"Circle"},"selection_glyph":null},"id":"8d3cbbc4-327f-4124-8028-13d61036a765","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"f496632c-796e-4638-b613-d9ff3ab48dc5","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f1712e0f-5564-488c-b720-8f94cc166f8e","type":"BoxAnnotation"},{"attributes":{},"id":"0459165b-4af6-48bf-8167-3582c30e5847","type":"BasicTicker"},{"attributes":{"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"}},"id":"3603a457-675d-41a9-8f26-787dd0252842","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"52bc17e2-cae3-43f2-b419-dd6577e97134","type":"BoxAnnotation"},"plot":{"id":"cc72c0f1-13cd-4059-83eb-426a39393d62","subtype":"Figure","type":"Plot"},"renderers":[{"id":"8d3cbbc4-327f-4124-8028-13d61036a765","type":"GlyphRenderer"}]},"id":"783bc27f-b8fb-4b8a-80e1-2b26fa7d3a78","type":"BoxSelectTool"}],"root_ids":["cc72c0f1-13cd-4059-83eb-426a39393d62"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d6a0e7e6-99b0-4a0f-ad9f-ed4a490a2844","elementid":"cd6a9393-ad7d-4359-b76f-ffd93e618d51","modelid":"cc72c0f1-13cd-4059-83eb-426a39393d62"}];
                
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
