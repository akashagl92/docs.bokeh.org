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
      };var element = document.getElementById("341860c3-b7bf-41c6-8e10-170c357b85da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '341860c3-b7bf-41c6-8e10-170c357b85da' but no matching script tag was found. ")
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
                var docs_json = {"49f18832-b736-43b7-b5f9-4ab201d8f54e":{"roots":{"references":[{"attributes":{"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"}},"id":"95003c6a-de8f-49c3-953b-3392acdd30f2","type":"ResizeTool"},{"attributes":{"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"}},"id":"d692cec1-dd3e-41e7-a177-d2cc413114ea","type":"CrosshairTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf04689b-0b34-45b2-a1bf-917361d2c015","type":"Circle"},{"attributes":{"formatter":{"id":"28007b1e-c0be-4f28-8485-deb4e0827668","type":"BasicTickFormatter"},"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e70219d0-f7fa-4a95-a1cc-8a3db6584e37","type":"BasicTicker"}},"id":"09c726fd-6936-41f8-a81d-9d2ada677965","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bb98a7fb-f99b-4dc9-b211-4488160d8845","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"bb98a7fb-f99b-4dc9-b211-4488160d8845","type":"BoxAnnotation"},"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"}},"id":"250500e6-203c-43d6-ab05-9d5b4fa238a5","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"cc8a8f78-a00a-4d2b-a198-512649aab925","type":"DataRange1d"},{"attributes":{},"id":"a26c4e3d-4a91-4ee0-9c31-6bc522cfca44","type":"BasicTicker"},{"attributes":{"below":[{"id":"f5bb8a96-e2c4-4155-9bca-a69ec3b5b524","type":"LinearAxis"}],"left":[{"id":"09c726fd-6936-41f8-a81d-9d2ada677965","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f5bb8a96-e2c4-4155-9bca-a69ec3b5b524","type":"LinearAxis"},{"id":"bb14f485-d9aa-4e51-ac2e-77f120c5bd3e","type":"Grid"},{"id":"09c726fd-6936-41f8-a81d-9d2ada677965","type":"LinearAxis"},{"id":"8161fbdb-a334-4160-bb56-e3b6631a0d9d","type":"Grid"},{"id":"bb98a7fb-f99b-4dc9-b211-4488160d8845","type":"BoxAnnotation"},{"id":"db048b40-e801-4707-9177-74703d183f4f","type":"BoxAnnotation"},{"id":"bdfc27cc-e2cd-4785-9ad5-3f5a8e3ea762","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"2c1d4b09-19cd-4f56-bcb6-be9d4b6a5fa4","type":"ToolEvents"},"toolbar":{"id":"87fb2388-6c2f-41f6-9d47-fddff8df7aed","type":"Toolbar"},"x_range":{"id":"cc8a8f78-a00a-4d2b-a198-512649aab925","type":"DataRange1d"},"y_range":{"id":"6587d4fa-8a6d-4238-a8eb-f730f5d4968d","type":"DataRange1d"}},"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"}},"id":"432d4bea-bc05-4e77-a270-206402aba2c5","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"75d560f1-e077-4669-b573-d76e919595f1","type":"Circle"},{"attributes":{},"id":"e70219d0-f7fa-4a95-a1cc-8a3db6584e37","type":"BasicTicker"},{"attributes":{},"id":"28007b1e-c0be-4f28-8485-deb4e0827668","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"e70219d0-f7fa-4a95-a1cc-8a3db6584e37","type":"BasicTicker"}},"id":"8161fbdb-a334-4160-bb56-e3b6631a0d9d","type":"Grid"},{"attributes":{"formatter":{"id":"9c1cfd06-2d49-4651-8048-ca75962b9ce1","type":"BasicTickFormatter"},"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a26c4e3d-4a91-4ee0-9c31-6bc522cfca44","type":"BasicTicker"}},"id":"f5bb8a96-e2c4-4155-9bca-a69ec3b5b524","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6587d4fa-8a6d-4238-a8eb-f730f5d4968d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"30e4bd0c-27f4-422b-9b31-a36dcaaf49c4","type":"ColumnDataSource"},"glyph":{"id":"75d560f1-e077-4669-b573-d76e919595f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bf04689b-0b34-45b2-a1bf-917361d2c015","type":"Circle"},"selection_glyph":null},"id":"bdfc27cc-e2cd-4785-9ad5-3f5a8e3ea762","type":"GlyphRenderer"},{"attributes":{},"id":"2c1d4b09-19cd-4f56-bcb6-be9d4b6a5fa4","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"db048b40-e801-4707-9177-74703d183f4f","type":"BoxAnnotation"},{"attributes":{},"id":"9c1cfd06-2d49-4651-8048-ca75962b9ce1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"30e4bd0c-27f4-422b-9b31-a36dcaaf49c4","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"250500e6-203c-43d6-ab05-9d5b4fa238a5","type":"BoxZoomTool"},{"id":"bd8af810-8c13-4c98-b0c2-451f8b131480","type":"BoxSelectTool"},{"id":"d692cec1-dd3e-41e7-a177-d2cc413114ea","type":"CrosshairTool"},{"id":"95003c6a-de8f-49c3-953b-3392acdd30f2","type":"ResizeTool"},{"id":"432d4bea-bc05-4e77-a270-206402aba2c5","type":"ResetTool"}]},"id":"87fb2388-6c2f-41f6-9d47-fddff8df7aed","type":"Toolbar"},{"attributes":{"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a26c4e3d-4a91-4ee0-9c31-6bc522cfca44","type":"BasicTicker"}},"id":"bb14f485-d9aa-4e51-ac2e-77f120c5bd3e","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"db048b40-e801-4707-9177-74703d183f4f","type":"BoxAnnotation"},"plot":{"id":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a","subtype":"Figure","type":"Plot"},"renderers":[{"id":"bdfc27cc-e2cd-4785-9ad5-3f5a8e3ea762","type":"GlyphRenderer"}]},"id":"bd8af810-8c13-4c98-b0c2-451f8b131480","type":"BoxSelectTool"}],"root_ids":["73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"49f18832-b736-43b7-b5f9-4ab201d8f54e","elementid":"341860c3-b7bf-41c6-8e10-170c357b85da","modelid":"73abfb4a-6ab1-4477-bb59-91d3f1a1eb5a"}];
                
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
