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
      };var element = document.getElementById("e8cb07c7-cdb1-4d4a-bff2-3092013c848b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8cb07c7-cdb1-4d4a-bff2-3092013c848b' but no matching script tag was found. ")
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
                var docs_json = {"11787a8f-f3b8-4da9-ace2-4777152dfa34":{"roots":{"references":[{"attributes":{"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"}},"id":"4da3ea5f-afef-41f3-a4fc-c238720b0f94","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"084405ee-a6e3-49c1-aacf-fe634ee89475","type":"PanTool"},{"id":"e21a438f-bf91-486e-ac4e-8d7081eb88a2","type":"WheelZoomTool"},{"id":"4854967a-4b2b-4383-9141-1161686447cf","type":"BoxZoomTool"},{"id":"a39259af-960f-4cd1-80fa-477eb4853e34","type":"SaveTool"},{"id":"64276f2f-7628-477d-b58e-ed72a789926b","type":"ResetTool"},{"id":"4da3ea5f-afef-41f3-a4fc-c238720b0f94","type":"HelpTool"}]},"id":"8b609d50-a5e8-47b5-8cc1-36eb7e5db2b0","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b501e291-65e2-4fc6-a12d-bbfbf5cef59b","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"4d71f3c2-e52e-4cf9-a92d-02ed6a905a12","type":"Title"},{"attributes":{"data_source":{"id":"29f62e5b-3c6c-41fc-abca-d86c6c00da1c","type":"ColumnDataSource"},"glyph":{"id":"b501e291-65e2-4fc6-a12d-bbfbf5cef59b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4736c98d-6720-4ac7-a414-d5d265dabd17","type":"Circle"},"selection_glyph":null},"id":"7ee0fbdd-815e-499e-a788-06f3100df11c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e7c62fb9-dd06-4ba9-86fe-3f0283a9e4c2","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4a60c5b-f4fe-4150-bb92-0a0f59c38758","type":"BasicTicker"}},"id":"081dd3ec-6c04-40e7-83ab-0120d43cbc47","type":"Grid"},{"attributes":{"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"}},"id":"e21a438f-bf91-486e-ac4e-8d7081eb88a2","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7fa1910c-969b-44ad-aa6b-31f2c4ce9c6a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"}},"id":"084405ee-a6e3-49c1-aacf-fe634ee89475","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"29f62e5b-3c6c-41fc-abca-d86c6c00da1c","type":"ColumnDataSource"},{"attributes":{},"id":"da390bc7-b022-42ef-ae4e-6b8451683498","type":"BasicTicker"},{"attributes":{"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"},"ticker":{"id":"da390bc7-b022-42ef-ae4e-6b8451683498","type":"BasicTicker"}},"id":"cd2f1603-0730-484c-b819-5856e741ed04","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4736c98d-6720-4ac7-a414-d5d265dabd17","type":"Circle"},{"attributes":{"callback":null},"id":"5f013bcf-3ea6-4924-83a4-7cf1ef7eb577","type":"DataRange1d"},{"attributes":{"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"}},"id":"64276f2f-7628-477d-b58e-ed72a789926b","type":"ResetTool"},{"attributes":{},"id":"847571c4-90d5-43e7-8a3f-6dcc80f5b013","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e8114812-dca5-438b-9377-8f7ee467b0b4","type":"BasicTickFormatter"},"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"},"ticker":{"id":"da390bc7-b022-42ef-ae4e-6b8451683498","type":"BasicTicker"}},"id":"15db90ea-1b18-4434-947a-b2e3f3a1df4b","type":"LinearAxis"},{"attributes":{"below":[{"id":"15db90ea-1b18-4434-947a-b2e3f3a1df4b","type":"LinearAxis"}],"left":[{"id":"f3ad18d4-399c-4fc5-9428-d3cf53e2eac3","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"15db90ea-1b18-4434-947a-b2e3f3a1df4b","type":"LinearAxis"},{"id":"cd2f1603-0730-484c-b819-5856e741ed04","type":"Grid"},{"id":"f3ad18d4-399c-4fc5-9428-d3cf53e2eac3","type":"LinearAxis"},{"id":"081dd3ec-6c04-40e7-83ab-0120d43cbc47","type":"Grid"},{"id":"7fa1910c-969b-44ad-aa6b-31f2c4ce9c6a","type":"BoxAnnotation"},{"id":"7ee0fbdd-815e-499e-a788-06f3100df11c","type":"GlyphRenderer"}],"title":{"id":"4d71f3c2-e52e-4cf9-a92d-02ed6a905a12","type":"Title"},"tool_events":{"id":"f4e79eaa-ba30-43d6-af9d-f2a1bba04319","type":"ToolEvents"},"toolbar":{"id":"8b609d50-a5e8-47b5-8cc1-36eb7e5db2b0","type":"Toolbar"},"x_range":{"id":"e7c62fb9-dd06-4ba9-86fe-3f0283a9e4c2","type":"DataRange1d"},"y_range":{"id":"5f013bcf-3ea6-4924-83a4-7cf1ef7eb577","type":"DataRange1d"}},"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e8114812-dca5-438b-9377-8f7ee467b0b4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"}},"id":"a39259af-960f-4cd1-80fa-477eb4853e34","type":"SaveTool"},{"attributes":{},"id":"d4a60c5b-f4fe-4150-bb92-0a0f59c38758","type":"BasicTicker"},{"attributes":{"formatter":{"id":"847571c4-90d5-43e7-8a3f-6dcc80f5b013","type":"BasicTickFormatter"},"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4a60c5b-f4fe-4150-bb92-0a0f59c38758","type":"BasicTicker"}},"id":"f3ad18d4-399c-4fc5-9428-d3cf53e2eac3","type":"LinearAxis"},{"attributes":{"overlay":{"id":"7fa1910c-969b-44ad-aa6b-31f2c4ce9c6a","type":"BoxAnnotation"},"plot":{"id":"e6bbb880-eac8-4b8d-8aab-11480ee20389","subtype":"Figure","type":"Plot"}},"id":"4854967a-4b2b-4383-9141-1161686447cf","type":"BoxZoomTool"},{"attributes":{},"id":"f4e79eaa-ba30-43d6-af9d-f2a1bba04319","type":"ToolEvents"}],"root_ids":["e6bbb880-eac8-4b8d-8aab-11480ee20389"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"11787a8f-f3b8-4da9-ace2-4777152dfa34","elementid":"e8cb07c7-cdb1-4d4a-bff2-3092013c848b","modelid":"e6bbb880-eac8-4b8d-8aab-11480ee20389"}];
                
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
