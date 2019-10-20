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
      };var element = document.getElementById("0868d352-12ed-4cae-b0cf-0f700159ba5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0868d352-12ed-4cae-b0cf-0f700159ba5b' but no matching script tag was found. ")
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
                var docs_json = {"0319f6e3-1f66-4523-8dd9-d7dcf3439d0d":{"roots":{"references":[{"attributes":{},"id":"db5a56ff-b470-4570-84b2-5590cbd05f1e","type":"BasicTicker"},{"attributes":{},"id":"8acf49fa-7089-488f-b243-afe810bebb43","type":"ToolEvents"},{"attributes":{"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"}},"id":"e4ca56c6-1d92-48ed-8d18-1ec0a9265908","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"91a37f5e-9335-4ad9-9f63-c6b7db1bf123","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"42d37064-cf7f-4ecf-b522-a1226f1d8e0b","type":"BasicTickFormatter"},"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f893a3c2-0bf2-4038-af34-02851210640c","type":"BasicTicker"}},"id":"430dee0c-77ae-46aa-8e5a-5d30ec92c5a7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8193e2db-0142-4ac4-acb1-b14001d2e0d6","type":"ColumnDataSource"},"glyph":{"id":"fc151c53-8773-4157-9d41-c85259971a8b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d1111208-4f48-4567-b313-86198ef2cb4a","type":"Circle"},"selection_glyph":null},"id":"810ad35e-1312-4333-aa0e-4cf3c5b559b4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"}},"id":"06129a72-c1ee-4b1d-8a4a-c52a3694600b","type":"HelpTool"},{"attributes":{"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"}},"id":"cc72cdaa-0090-4aee-80b0-e2e8ac77edad","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"db5a56ff-b470-4570-84b2-5590cbd05f1e","type":"BasicTicker"}},"id":"b448a7a9-e4a5-4523-8b76-fd3700e859e6","type":"Grid"},{"attributes":{"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"}},"id":"4450b068-d829-41b5-a09a-2b1dc4d42b27","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8193e2db-0142-4ac4-acb1-b14001d2e0d6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"}},"id":"68fc7ac1-601e-4753-82f3-97c3a69a2cb0","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4450b068-d829-41b5-a09a-2b1dc4d42b27","type":"PanTool"},{"id":"cc72cdaa-0090-4aee-80b0-e2e8ac77edad","type":"WheelZoomTool"},{"id":"f59f535b-c6df-471e-b885-3035392c79ef","type":"BoxZoomTool"},{"id":"68fc7ac1-601e-4753-82f3-97c3a69a2cb0","type":"SaveTool"},{"id":"e4ca56c6-1d92-48ed-8d18-1ec0a9265908","type":"ResetTool"},{"id":"06129a72-c1ee-4b1d-8a4a-c52a3694600b","type":"HelpTool"}]},"id":"cb864b4a-8c74-410b-9142-1007ce5d39c3","type":"Toolbar"},{"attributes":{},"id":"4f1a44f2-6ea2-4609-a194-8e60c3476ca6","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"5ef8ae49-1c40-4f1b-bd91-4fc0a5f9322c","type":"LinearAxis"}],"left":[{"id":"430dee0c-77ae-46aa-8e5a-5d30ec92c5a7","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"5ef8ae49-1c40-4f1b-bd91-4fc0a5f9322c","type":"LinearAxis"},{"id":"b448a7a9-e4a5-4523-8b76-fd3700e859e6","type":"Grid"},{"id":"430dee0c-77ae-46aa-8e5a-5d30ec92c5a7","type":"LinearAxis"},{"id":"a67a86ca-e55c-4944-8a90-38e54cf48bde","type":"Grid"},{"id":"91a37f5e-9335-4ad9-9f63-c6b7db1bf123","type":"BoxAnnotation"},{"id":"810ad35e-1312-4333-aa0e-4cf3c5b559b4","type":"GlyphRenderer"}],"title":{"id":"4d1dad95-cc69-40b2-ba5b-74274d5c7b99","type":"Title"},"tool_events":{"id":"8acf49fa-7089-488f-b243-afe810bebb43","type":"ToolEvents"},"toolbar":{"id":"cb864b4a-8c74-410b-9142-1007ce5d39c3","type":"Toolbar"},"x_range":{"id":"1a83df9e-fd35-47cc-806e-b3427d3cd6cb","type":"DataRange1d"},"y_range":{"id":"51f14d0a-6f2f-41a4-8792-fca484c93615","type":"DataRange1d"}},"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"91a37f5e-9335-4ad9-9f63-c6b7db1bf123","type":"BoxAnnotation"},"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"}},"id":"f59f535b-c6df-471e-b885-3035392c79ef","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f893a3c2-0bf2-4038-af34-02851210640c","type":"BasicTicker"}},"id":"a67a86ca-e55c-4944-8a90-38e54cf48bde","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1111208-4f48-4567-b313-86198ef2cb4a","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"4d1dad95-cc69-40b2-ba5b-74274d5c7b99","type":"Title"},{"attributes":{},"id":"42d37064-cf7f-4ecf-b522-a1226f1d8e0b","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc151c53-8773-4157-9d41-c85259971a8b","type":"Circle"},{"attributes":{"formatter":{"id":"4f1a44f2-6ea2-4609-a194-8e60c3476ca6","type":"BasicTickFormatter"},"plot":{"id":"581b4c50-d0e7-445e-98e4-6959ea906bb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"db5a56ff-b470-4570-84b2-5590cbd05f1e","type":"BasicTicker"}},"id":"5ef8ae49-1c40-4f1b-bd91-4fc0a5f9322c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"51f14d0a-6f2f-41a4-8792-fca484c93615","type":"DataRange1d"},{"attributes":{"callback":null},"id":"1a83df9e-fd35-47cc-806e-b3427d3cd6cb","type":"DataRange1d"},{"attributes":{},"id":"f893a3c2-0bf2-4038-af34-02851210640c","type":"BasicTicker"}],"root_ids":["581b4c50-d0e7-445e-98e4-6959ea906bb9"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"0319f6e3-1f66-4523-8dd9-d7dcf3439d0d","elementid":"0868d352-12ed-4cae-b0cf-0f700159ba5b","modelid":"581b4c50-d0e7-445e-98e4-6959ea906bb9"}];
                
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
