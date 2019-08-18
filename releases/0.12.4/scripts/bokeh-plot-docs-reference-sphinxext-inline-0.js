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
      };var element = document.getElementById("38e35076-8f49-429b-8b76-78b860959eb3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '38e35076-8f49-429b-8b76-78b860959eb3' but no matching script tag was found. ")
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
                var docs_json = {"6df3f5b5-e099-4964-bcf3-530a79b24415":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19636a25-f28f-4a3d-96aa-0a0e74d2eca4","type":"Circle"},{"attributes":{},"id":"391a2d1c-ed9f-4009-9353-04f117626afd","type":"BasicTicker"},{"attributes":{},"id":"00d61cd1-b95a-4186-ac2f-c7fbfb9494fa","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e73da17-26de-4937-b19d-22f48f189af7","type":"Line"},{"attributes":{"formatter":{"id":"00d61cd1-b95a-4186-ac2f-c7fbfb9494fa","type":"BasicTickFormatter"},"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da0a2b7-079b-4548-809b-42083af9ccbf","type":"BasicTicker"}},"id":"bd266d6c-d5f0-4ed5-b46b-ec99ed575ccf","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"415d6e76-6314-4dca-90d3-31733fb02fa6","type":"PanTool"},{"id":"431024c9-d587-4ff9-b8ad-12dc7b48ac43","type":"WheelZoomTool"},{"id":"a2fa0fa3-2dc6-45a0-9466-8e236c1b12ef","type":"BoxZoomTool"},{"id":"638f7336-11f5-4f41-884a-dfe0a68165c9","type":"SaveTool"},{"id":"dc65e368-78b4-407f-a9e9-eea7946bed91","type":"ResetTool"},{"id":"9813a16f-9d2b-4ff7-82cc-cd282f267692","type":"HelpTool"}]},"id":"5636b4ce-1f03-48a9-b1a3-385472a3e656","type":"Toolbar"},{"attributes":{"data_source":{"id":"9b3f971b-9d1b-4610-a7ac-22c33a0ffe37","type":"ColumnDataSource"},"glyph":{"id":"6f14cc2a-d714-4cdf-be4f-95f0b9ba352c","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"5e73da17-26de-4937-b19d-22f48f189af7","type":"Line"},"selection_glyph":null},"id":"f96591c2-02a1-4dbd-9ec6-b4c5735e48fd","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"}},"id":"dc65e368-78b4-407f-a9e9-eea7946bed91","type":"ResetTool"},{"attributes":{"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"}},"id":"431024c9-d587-4ff9-b8ad-12dc7b48ac43","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"example"},"id":"18ee01d0-cb7b-4d50-8052-c9a63df3170b","type":"Title"},{"attributes":{"callback":null},"id":"8c5901ab-b002-4f74-9da5-f38205c38763","type":"DataRange1d"},{"attributes":{"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"391a2d1c-ed9f-4009-9353-04f117626afd","type":"BasicTicker"}},"id":"b7f64d56-8a36-4504-bf9d-2bc890b42183","type":"Grid"},{"attributes":{"data_source":{"id":"df5fe238-f324-41ea-bf84-9ee974845392","type":"ColumnDataSource"},"glyph":{"id":"44dea37f-ebc9-4a7d-9ed6-65684daddf1e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"19636a25-f28f-4a3d-96aa-0a0e74d2eca4","type":"Circle"},"selection_glyph":null},"id":"6a37c63d-e4e9-479e-b9d3-1d2ebde7ac39","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"}},"id":"9813a16f-9d2b-4ff7-82cc-cd282f267692","type":"HelpTool"},{"attributes":{},"id":"ea47c66b-6195-4651-bd10-b4c150d2da67","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c0cd5f5-fd74-4e2e-bcc0-e7e6ede5b636","type":"BoxAnnotation"},{"attributes":{},"id":"08ebb77f-fc75-4c4e-980d-0611dea909b2","type":"ToolEvents"},{"attributes":{"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"}},"id":"638f7336-11f5-4f41-884a-dfe0a68165c9","type":"SaveTool"},{"attributes":{"callback":null},"id":"002e9dd7-702d-4042-9a1f-f48f1ab3697f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"44dea37f-ebc9-4a7d-9ed6-65684daddf1e","type":"Circle"},{"attributes":{"overlay":{"id":"0c0cd5f5-fd74-4e2e-bcc0-e7e6ede5b636","type":"BoxAnnotation"},"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"}},"id":"a2fa0fa3-2dc6-45a0-9466-8e236c1b12ef","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"6e78fa65-54c1-441e-ba88-e2f095362a0c","type":"LinearAxis"}],"left":[{"id":"bd266d6c-d5f0-4ed5-b46b-ec99ed575ccf","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6e78fa65-54c1-441e-ba88-e2f095362a0c","type":"LinearAxis"},{"id":"b7f64d56-8a36-4504-bf9d-2bc890b42183","type":"Grid"},{"id":"bd266d6c-d5f0-4ed5-b46b-ec99ed575ccf","type":"LinearAxis"},{"id":"e39f44d9-1938-4bac-8ca7-6164249b4f68","type":"Grid"},{"id":"0c0cd5f5-fd74-4e2e-bcc0-e7e6ede5b636","type":"BoxAnnotation"},{"id":"f96591c2-02a1-4dbd-9ec6-b4c5735e48fd","type":"GlyphRenderer"},{"id":"6a37c63d-e4e9-479e-b9d3-1d2ebde7ac39","type":"GlyphRenderer"}],"title":{"id":"18ee01d0-cb7b-4d50-8052-c9a63df3170b","type":"Title"},"tool_events":{"id":"08ebb77f-fc75-4c4e-980d-0611dea909b2","type":"ToolEvents"},"toolbar":{"id":"5636b4ce-1f03-48a9-b1a3-385472a3e656","type":"Toolbar"},"x_range":{"id":"002e9dd7-702d-4042-9a1f-f48f1ab3697f","type":"DataRange1d"},"y_range":{"id":"8c5901ab-b002-4f74-9da5-f38205c38763","type":"DataRange1d"}},"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"9b3f971b-9d1b-4610-a7ac-22c33a0ffe37","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"df5fe238-f324-41ea-bf84-9ee974845392","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f14cc2a-d714-4cdf-be4f-95f0b9ba352c","type":"Line"},{"attributes":{"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"}},"id":"415d6e76-6314-4dca-90d3-31733fb02fa6","type":"PanTool"},{"attributes":{},"id":"9da0a2b7-079b-4548-809b-42083af9ccbf","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ea47c66b-6195-4651-bd10-b4c150d2da67","type":"BasicTickFormatter"},"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"391a2d1c-ed9f-4009-9353-04f117626afd","type":"BasicTicker"}},"id":"6e78fa65-54c1-441e-ba88-e2f095362a0c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a76af6b0-0ab1-4e31-a293-75446be10f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da0a2b7-079b-4548-809b-42083af9ccbf","type":"BasicTicker"}},"id":"e39f44d9-1938-4bac-8ca7-6164249b4f68","type":"Grid"}],"root_ids":["a76af6b0-0ab1-4e31-a293-75446be10f37"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6df3f5b5-e099-4964-bcf3-530a79b24415","elementid":"38e35076-8f49-429b-8b76-78b860959eb3","modelid":"a76af6b0-0ab1-4e31-a293-75446be10f37"}];
                
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
