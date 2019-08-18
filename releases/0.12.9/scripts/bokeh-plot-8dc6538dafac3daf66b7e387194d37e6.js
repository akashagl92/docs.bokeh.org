(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("fd0d13a4-105b-4299-9d15-4f292ffb5032");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd0d13a4-105b-4299-9d15-4f292ffb5032' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"6296645f-7151-4e26-85ba-0aec4486425e":{"roots":{"references":[{"attributes":{"formatter":{"id":"46180e9a-c30a-44e4-bc38-aec6893ea2b0","type":"BasicTickFormatter"},"plot":{"id":"ce9b4735-7c5b-40fc-a295-fb9b98e599c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"bed96806-9fef-41b0-a6fe-fb2d4943adab","type":"BasicTicker"}},"id":"005ea956-9666-434b-99c3-96ccee6ff1f8","type":"LinearAxis"},{"attributes":{"source":{"id":"1de09f4a-8076-401f-a2aa-d9e078276f7e","type":"ColumnDataSource"}},"id":"39465e88-5074-4101-a20b-c780049fe879","type":"CDSView"},{"attributes":{},"id":"fd9e04bd-4316-4fe9-b08d-ffa93d53c794","type":"LinearScale"},{"attributes":{},"id":"71fd8745-7157-4185-be5c-ac67a3b06069","type":"ResetTool"},{"attributes":{"formatter":{"id":"e82cd477-bafd-437f-b796-828904cad778","type":"BasicTickFormatter"},"plot":{"id":"ce9b4735-7c5b-40fc-a295-fb9b98e599c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eaf773af-026e-4c7f-b4c7-cc7935cc189c","type":"BasicTicker"}},"id":"8ffe5143-49d5-46a6-a2fe-d2ae3126c733","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ce9b4735-7c5b-40fc-a295-fb9b98e599c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eaf773af-026e-4c7f-b4c7-cc7935cc189c","type":"BasicTicker"}},"id":"3b5858a4-f402-49e1-956a-56df8f35638c","type":"Grid"},{"attributes":{"callback":null},"id":"7fa5dc8e-2006-4922-87ed-5f16edb5f1c6","type":"DataRange1d"},{"attributes":{},"id":"5db20406-542a-4b7c-a233-57a204990f70","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"2bc71280-c723-4edd-ae35-b0d8cd21d396","type":"HBar"},{"attributes":{},"id":"5f3b4280-417f-4dc6-8bda-7cf0f8472121","type":"HelpTool"},{"attributes":{},"id":"bed96806-9fef-41b0-a6fe-fb2d4943adab","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"ebe97152-1165-4db8-a8e4-1377437c0746","type":"HBar"},{"attributes":{"overlay":{"id":"557f7023-363a-4aba-bdd9-848d60927c53","type":"BoxAnnotation"}},"id":"97230e8c-d45a-4ecd-bf75-425599323a6f","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"1eb0ccdf-3e00-4e6d-89a9-1c8dac168d5d","type":"DataRange1d"},{"attributes":{},"id":"e82cd477-bafd-437f-b796-828904cad778","type":"BasicTickFormatter"},{"attributes":{},"id":"c2b68942-7def-4c52-879b-dc67ab6dc44c","type":"SaveTool"},{"attributes":{},"id":"28ad9f02-71f7-4f67-b210-bcb267508260","type":"LinearScale"},{"attributes":{"plot":{"id":"ce9b4735-7c5b-40fc-a295-fb9b98e599c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"bed96806-9fef-41b0-a6fe-fb2d4943adab","type":"BasicTicker"}},"id":"5e3c1309-a4a3-4bcb-89cd-ab92dc72408c","type":"Grid"},{"attributes":{},"id":"b5f4b8ab-0473-430a-98e1-e8a87a21dbce","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]}},"id":"1de09f4a-8076-401f-a2aa-d9e078276f7e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"005ea956-9666-434b-99c3-96ccee6ff1f8","type":"LinearAxis"}],"left":[{"id":"8ffe5143-49d5-46a6-a2fe-d2ae3126c733","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"005ea956-9666-434b-99c3-96ccee6ff1f8","type":"LinearAxis"},{"id":"5e3c1309-a4a3-4bcb-89cd-ab92dc72408c","type":"Grid"},{"id":"8ffe5143-49d5-46a6-a2fe-d2ae3126c733","type":"LinearAxis"},{"id":"3b5858a4-f402-49e1-956a-56df8f35638c","type":"Grid"},{"id":"557f7023-363a-4aba-bdd9-848d60927c53","type":"BoxAnnotation"},{"id":"6caaa1ae-e026-4c2e-8424-b17c32c08040","type":"GlyphRenderer"}],"title":{"id":"15b5b437-6f21-46e7-99af-bb8e08019e91","type":"Title"},"toolbar":{"id":"a41e3613-f29e-480c-a44d-3689a94dfe07","type":"Toolbar"},"x_range":{"id":"1eb0ccdf-3e00-4e6d-89a9-1c8dac168d5d","type":"DataRange1d"},"x_scale":{"id":"28ad9f02-71f7-4f67-b210-bcb267508260","type":"LinearScale"},"y_range":{"id":"7fa5dc8e-2006-4922-87ed-5f16edb5f1c6","type":"DataRange1d"},"y_scale":{"id":"fd9e04bd-4316-4fe9-b08d-ffa93d53c794","type":"LinearScale"}},"id":"ce9b4735-7c5b-40fc-a295-fb9b98e599c7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"eaf773af-026e-4c7f-b4c7-cc7935cc189c","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5db20406-542a-4b7c-a233-57a204990f70","type":"PanTool"},{"id":"b5f4b8ab-0473-430a-98e1-e8a87a21dbce","type":"WheelZoomTool"},{"id":"97230e8c-d45a-4ecd-bf75-425599323a6f","type":"BoxZoomTool"},{"id":"c2b68942-7def-4c52-879b-dc67ab6dc44c","type":"SaveTool"},{"id":"71fd8745-7157-4185-be5c-ac67a3b06069","type":"ResetTool"},{"id":"5f3b4280-417f-4dc6-8bda-7cf0f8472121","type":"HelpTool"}]},"id":"a41e3613-f29e-480c-a44d-3689a94dfe07","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"15b5b437-6f21-46e7-99af-bb8e08019e91","type":"Title"},{"attributes":{},"id":"46180e9a-c30a-44e4-bc38-aec6893ea2b0","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"557f7023-363a-4aba-bdd9-848d60927c53","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1de09f4a-8076-401f-a2aa-d9e078276f7e","type":"ColumnDataSource"},"glyph":{"id":"ebe97152-1165-4db8-a8e4-1377437c0746","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2bc71280-c723-4edd-ae35-b0d8cd21d396","type":"HBar"},"selection_glyph":null,"view":{"id":"39465e88-5074-4101-a20b-c780049fe879","type":"CDSView"}},"id":"6caaa1ae-e026-4c2e-8424-b17c32c08040","type":"GlyphRenderer"}],"root_ids":["ce9b4735-7c5b-40fc-a295-fb9b98e599c7"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"6296645f-7151-4e26-85ba-0aec4486425e","elementid":"fd0d13a4-105b-4299-9d15-4f292ffb5032","modelid":"ce9b4735-7c5b-40fc-a295-fb9b98e599c7"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
