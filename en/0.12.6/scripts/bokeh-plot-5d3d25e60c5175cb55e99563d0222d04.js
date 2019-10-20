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
      };var element = document.getElementById("73db12fc-5501-47da-af09-19d56e4f0f17");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73db12fc-5501-47da-af09-19d56e4f0f17' but no matching script tag was found. ")
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
                var docs_json = {"e783c78f-e181-402e-be3d-18ec557300ff":{"roots":{"references":[{"attributes":{"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"}},"id":"b1c8bdf2-2069-468b-9922-ccfe48fbdea0","type":"ResetTool"},{"attributes":{"data_source":{"id":"bda8f456-2e14-46f0-aad1-bd031326477f","type":"ColumnDataSource"},"glyph":{"id":"9052ced1-59db-4777-86ff-4869daa0b259","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f62260bf-4d69-444b-9fc0-a902ea0bc9d5","type":"Circle"},"selection_glyph":null},"id":"e34088ca-83a7-45de-a4df-d1a03bed6b9e","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"679b9dc2-f6a3-4a55-82ec-92a781426140","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"}},"id":"d2a4819c-7ad0-499f-aa1d-4c3310e715e1","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"},"ticker":{"id":"d517e547-83f5-4310-a84b-fff75ee7b13e","type":"BasicTicker"}},"id":"5d4902f0-79ef-44b9-a49e-c088de38e09e","type":"Grid"},{"attributes":{"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"}},"id":"c9510e89-355a-48b8-93bd-ac031c8f208a","type":"HelpTool"},{"attributes":{},"id":"d517e547-83f5-4310-a84b-fff75ee7b13e","type":"BasicTicker"},{"attributes":{},"id":"b0920dd7-d03b-497d-9368-3546efea5aac","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9052ced1-59db-4777-86ff-4869daa0b259","type":"Circle"},{"attributes":{"callback":null},"id":"52fe272b-4647-4fdb-92ad-c992b35c31ad","type":"DataRange1d"},{"attributes":{"overlay":{"id":"679b9dc2-f6a3-4a55-82ec-92a781426140","type":"BoxAnnotation"},"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"}},"id":"efa03001-66aa-46fe-9005-fff5ebc35b37","type":"BoxZoomTool"},{"attributes":{},"id":"ee39e390-5a78-441b-82de-a8eb94a16d13","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"bda8f456-2e14-46f0-aad1-bd031326477f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f62260bf-4d69-444b-9fc0-a902ea0bc9d5","type":"Circle"},{"attributes":{"formatter":{"id":"83d2c74d-6ebd-4f63-aca7-147e8cbb7be3","type":"BasicTickFormatter"},"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"},"ticker":{"id":"fba26239-b72b-41ad-a93c-1d8862dfb92b","type":"BasicTicker"}},"id":"b44c748b-caac-4b15-aab6-509aab727a7b","type":"LinearAxis"},{"attributes":{},"id":"a3b45da5-df6b-4396-8ed2-d47d5c777029","type":"LinearScale"},{"attributes":{},"id":"3f53f5d1-3778-447d-b422-88c5c4b1f69e","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8634e2f-ec27-47d6-8c79-fe996f697c26","type":"PanTool"},{"id":"56dc1c11-e5d9-4c9c-b5c3-580747543ded","type":"WheelZoomTool"},{"id":"efa03001-66aa-46fe-9005-fff5ebc35b37","type":"BoxZoomTool"},{"id":"d2a4819c-7ad0-499f-aa1d-4c3310e715e1","type":"SaveTool"},{"id":"b1c8bdf2-2069-468b-9922-ccfe48fbdea0","type":"ResetTool"},{"id":"c9510e89-355a-48b8-93bd-ac031c8f208a","type":"HelpTool"}]},"id":"519bdc3a-0dfb-44b4-a1e7-9836c7511c27","type":"Toolbar"},{"attributes":{"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"}},"id":"56dc1c11-e5d9-4c9c-b5c3-580747543ded","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"}},"id":"e8634e2f-ec27-47d6-8c79-fe996f697c26","type":"PanTool"},{"attributes":{"below":[{"id":"b44c748b-caac-4b15-aab6-509aab727a7b","type":"LinearAxis"}],"left":[{"id":"6357730d-80fd-4a37-ba58-cef42ad4ccc8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b44c748b-caac-4b15-aab6-509aab727a7b","type":"LinearAxis"},{"id":"16f73452-29b1-4bc3-9eda-9fdc32077c13","type":"Grid"},{"id":"6357730d-80fd-4a37-ba58-cef42ad4ccc8","type":"LinearAxis"},{"id":"5d4902f0-79ef-44b9-a49e-c088de38e09e","type":"Grid"},{"id":"679b9dc2-f6a3-4a55-82ec-92a781426140","type":"BoxAnnotation"},{"id":"e34088ca-83a7-45de-a4df-d1a03bed6b9e","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"3f53f5d1-3778-447d-b422-88c5c4b1f69e","type":"ToolEvents"},"toolbar":{"id":"519bdc3a-0dfb-44b4-a1e7-9836c7511c27","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"52fe272b-4647-4fdb-92ad-c992b35c31ad","type":"DataRange1d"},"x_scale":{"id":"b0920dd7-d03b-497d-9368-3546efea5aac","type":"LinearScale"},"y_range":{"id":"63dcb6f6-7e9e-4cea-9bc1-fec72fc69a91","type":"DataRange1d"},"y_scale":{"id":"a3b45da5-df6b-4396-8ed2-d47d5c777029","type":"LinearScale"}},"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"83d2c74d-6ebd-4f63-aca7-147e8cbb7be3","type":"BasicTickFormatter"},{"attributes":{},"id":"fba26239-b72b-41ad-a93c-1d8862dfb92b","type":"BasicTicker"},{"attributes":{"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"},"ticker":{"id":"fba26239-b72b-41ad-a93c-1d8862dfb92b","type":"BasicTicker"}},"id":"16f73452-29b1-4bc3-9eda-9fdc32077c13","type":"Grid"},{"attributes":{"formatter":{"id":"ee39e390-5a78-441b-82de-a8eb94a16d13","type":"BasicTickFormatter"},"plot":{"id":"5a00465b-15a4-4036-a83c-f1bce165ca09","subtype":"Figure","type":"Plot"},"ticker":{"id":"d517e547-83f5-4310-a84b-fff75ee7b13e","type":"BasicTicker"}},"id":"6357730d-80fd-4a37-ba58-cef42ad4ccc8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"63dcb6f6-7e9e-4cea-9bc1-fec72fc69a91","type":"DataRange1d"}],"root_ids":["5a00465b-15a4-4036-a83c-f1bce165ca09"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e783c78f-e181-402e-be3d-18ec557300ff","elementid":"73db12fc-5501-47da-af09-19d56e4f0f17","modelid":"5a00465b-15a4-4036-a83c-f1bce165ca09"}];
                
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
