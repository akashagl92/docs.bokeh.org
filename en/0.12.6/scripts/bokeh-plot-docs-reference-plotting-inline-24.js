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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("553109c5-89a7-4011-ac7c-26a763797ff5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '553109c5-89a7-4011-ac7c-26a763797ff5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"0fea7cd0-c32d-41c4-b348-ee4dd4ca9dd9":{"roots":{"references":[{"attributes":{},"id":"541be8f2-ebba-4e4e-8852-4d7cd0af9752","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"e66c559f-4498-4446-b323-e12039521163","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"1176d451-d851-4252-b9f8-f450092e25a3","type":"Title"},{"attributes":{"formatter":{"id":"664ec6d0-804c-46b5-8d1f-e692c98a0eea","type":"BasicTickFormatter"},"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"541be8f2-ebba-4e4e-8852-4d7cd0af9752","type":"BasicTicker"}},"id":"36c67a05-7045-4132-8cb8-855266ce4d39","type":"LinearAxis"},{"attributes":{},"id":"8f39746c-2531-4287-8643-6140427c58b0","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"90d22255-963b-4755-b399-101156ab4052","type":"VBar"},{"attributes":{"below":[{"id":"e520b939-6a3f-4a2e-aa6d-d7588c4ddf02","type":"LinearAxis"}],"left":[{"id":"36c67a05-7045-4132-8cb8-855266ce4d39","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e520b939-6a3f-4a2e-aa6d-d7588c4ddf02","type":"LinearAxis"},{"id":"a1a5a152-a868-4164-9474-b6798f4ea5c9","type":"Grid"},{"id":"36c67a05-7045-4132-8cb8-855266ce4d39","type":"LinearAxis"},{"id":"e0311635-288e-4676-944e-591e0d7fb6bf","type":"Grid"},{"id":"cb09beb1-e3e5-4d96-8b80-d2b031089c0e","type":"BoxAnnotation"},{"id":"1b4f4b97-d071-4802-9d04-cfcc508b6850","type":"GlyphRenderer"}],"title":{"id":"1176d451-d851-4252-b9f8-f450092e25a3","type":"Title"},"tool_events":{"id":"e24f2218-d993-4530-a2d7-18a2a85633f7","type":"ToolEvents"},"toolbar":{"id":"7cd47d71-a28b-4436-b8ca-b38a7b77382a","type":"Toolbar"},"x_range":{"id":"44b8ce4e-f845-44b9-a88b-bf5e9817a1d0","type":"DataRange1d"},"x_scale":{"id":"291eec1c-a632-4255-809d-1a6e4dcb458d","type":"LinearScale"},"y_range":{"id":"71a3381c-3759-4c35-a161-a9d3465a7328","type":"DataRange1d"},"y_scale":{"id":"8f39746c-2531-4287-8643-6140427c58b0","type":"LinearScale"}},"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"d16172c1-e722-4467-b28d-00cedc56287e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5dc8d44-a8ea-4ca0-9b91-455f7f224f4d","type":"BasicTicker"}},"id":"a1a5a152-a868-4164-9474-b6798f4ea5c9","type":"Grid"},{"attributes":{},"id":"291eec1c-a632-4255-809d-1a6e4dcb458d","type":"LinearScale"},{"attributes":{"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"}},"id":"173409d6-d192-497a-aaa4-ac77be674746","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"541be8f2-ebba-4e4e-8852-4d7cd0af9752","type":"BasicTicker"}},"id":"e0311635-288e-4676-944e-591e0d7fb6bf","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9351c0b2-65fd-4ee2-a6c5-855c1daf93aa","type":"PanTool"},{"id":"b7bd56a1-c263-4a60-8613-7df3757d31df","type":"WheelZoomTool"},{"id":"80c545fb-7fe8-4d2c-ac2d-e37a13e4dade","type":"BoxZoomTool"},{"id":"173409d6-d192-497a-aaa4-ac77be674746","type":"SaveTool"},{"id":"3a094bd4-1b40-4948-b11f-9cbee08150b5","type":"ResetTool"},{"id":"9666adc1-d4f2-4f3b-90d1-41e34a8fbfea","type":"HelpTool"}]},"id":"7cd47d71-a28b-4436-b8ca-b38a7b77382a","type":"Toolbar"},{"attributes":{},"id":"f5dc8d44-a8ea-4ca0-9b91-455f7f224f4d","type":"BasicTicker"},{"attributes":{},"id":"bb3cab8e-7e31-46b4-9bab-748c87712044","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb09beb1-e3e5-4d96-8b80-d2b031089c0e","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"bb3cab8e-7e31-46b4-9bab-748c87712044","type":"BasicTickFormatter"},"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5dc8d44-a8ea-4ca0-9b91-455f7f224f4d","type":"BasicTicker"}},"id":"e520b939-6a3f-4a2e-aa6d-d7588c4ddf02","type":"LinearAxis"},{"attributes":{"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"}},"id":"9666adc1-d4f2-4f3b-90d1-41e34a8fbfea","type":"HelpTool"},{"attributes":{"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"}},"id":"3a094bd4-1b40-4948-b11f-9cbee08150b5","type":"ResetTool"},{"attributes":{"data_source":{"id":"d16172c1-e722-4467-b28d-00cedc56287e","type":"ColumnDataSource"},"glyph":{"id":"90d22255-963b-4755-b399-101156ab4052","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e66c559f-4498-4446-b323-e12039521163","type":"VBar"},"selection_glyph":null},"id":"1b4f4b97-d071-4802-9d04-cfcc508b6850","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"44b8ce4e-f845-44b9-a88b-bf5e9817a1d0","type":"DataRange1d"},{"attributes":{},"id":"664ec6d0-804c-46b5-8d1f-e692c98a0eea","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"}},"id":"9351c0b2-65fd-4ee2-a6c5-855c1daf93aa","type":"PanTool"},{"attributes":{},"id":"e24f2218-d993-4530-a2d7-18a2a85633f7","type":"ToolEvents"},{"attributes":{"overlay":{"id":"cb09beb1-e3e5-4d96-8b80-d2b031089c0e","type":"BoxAnnotation"},"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"}},"id":"80c545fb-7fe8-4d2c-ac2d-e37a13e4dade","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8","subtype":"Figure","type":"Plot"}},"id":"b7bd56a1-c263-4a60-8613-7df3757d31df","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"71a3381c-3759-4c35-a161-a9d3465a7328","type":"DataRange1d"}],"root_ids":["3a71e4f7-99cd-421e-8bc1-fe014d5545e8"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"0fea7cd0-c32d-41c4-b348-ee4dd4ca9dd9","elementid":"553109c5-89a7-4011-ac7c-26a763797ff5","modelid":"3a71e4f7-99cd-421e-8bc1-fe014d5545e8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
