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
      };var element = document.getElementById("e26598dd-e6b7-4548-93a6-69e1a27a1c7b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e26598dd-e6b7-4548-93a6-69e1a27a1c7b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"703540f4-5232-4473-bda5-dc14345add88":{"roots":{"references":[{"attributes":{},"id":"04e585a3-1a37-4745-9d8c-323fc4a2903f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b2e62a42-3437-4c2f-b31f-5aa6aa6e6560","type":"BasicTickFormatter"},"plot":{"id":"01e21c39-7afa-413b-9feb-137dec75db7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e1b3db2-da4c-4c5c-95e3-ba2f6c0532a3","type":"BasicTicker"}},"id":"0745fa5a-8c01-41be-a269-e282f4b131e0","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"9c879309-a717-44c2-9a47-8ad7689fa13f","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b2bcf041-179d-4b9b-a72b-8b011517c0a8","type":"BoxAnnotation"},{"attributes":{},"id":"8e6b76d1-c866-41ca-95cd-760cdd3222b5","type":"HelpTool"},{"attributes":{},"id":"e13a5bd8-d528-4239-87b3-b934fff62758","type":"LinearScale"},{"attributes":{},"id":"b2e62a42-3437-4c2f-b31f-5aa6aa6e6560","type":"BasicTickFormatter"},{"attributes":{},"id":"45d9cbca-fc48-4f33-bd82-a3909c187737","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f504ffa0-98db-4808-8535-eb1284ae7799","type":"Segment"},{"attributes":{},"id":"959847d8-0773-4d89-9b26-ae1fac4fc531","type":"SaveTool"},{"attributes":{},"id":"ed74d9bf-4b96-4029-826f-e7a36ae07614","type":"PanTool"},{"attributes":{},"id":"3902489f-b184-4afc-9d27-366fac0562b9","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed74d9bf-4b96-4029-826f-e7a36ae07614","type":"PanTool"},{"id":"2b86105b-4280-45de-9097-23b98a3ef6f8","type":"WheelZoomTool"},{"id":"facf9904-8fbf-4647-a7e1-bfaac5a3f697","type":"BoxZoomTool"},{"id":"959847d8-0773-4d89-9b26-ae1fac4fc531","type":"SaveTool"},{"id":"45d9cbca-fc48-4f33-bd82-a3909c187737","type":"ResetTool"},{"id":"8e6b76d1-c866-41ca-95cd-760cdd3222b5","type":"HelpTool"}]},"id":"d549d8b9-d99d-4004-9b6c-74aa5804df02","type":"Toolbar"},{"attributes":{"source":{"id":"7901c728-b35b-41c1-a816-f4a404082d0b","type":"ColumnDataSource"}},"id":"45e464a9-cb10-422f-91e5-cadd680faa55","type":"CDSView"},{"attributes":{"formatter":{"id":"04e585a3-1a37-4745-9d8c-323fc4a2903f","type":"BasicTickFormatter"},"plot":{"id":"01e21c39-7afa-413b-9feb-137dec75db7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed403349-19f9-409c-8ebc-c3ecc27473fd","type":"BasicTicker"}},"id":"512db5e2-ce99-417a-ad00-a20fd50a198e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"36d9bd2e-6bf9-4a2e-b6b5-b5c0f12ede98","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b5c81378-ea0b-4f49-8440-c9fb30bcadda","type":"Segment"},{"attributes":{"callback":null},"id":"b0862476-f26f-4d58-9bd7-9a9bc47c6cb3","type":"DataRange1d"},{"attributes":{},"id":"2b86105b-4280-45de-9097-23b98a3ef6f8","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"7901c728-b35b-41c1-a816-f4a404082d0b","type":"ColumnDataSource"},{"attributes":{},"id":"8e1b3db2-da4c-4c5c-95e3-ba2f6c0532a3","type":"BasicTicker"},{"attributes":{"plot":{"id":"01e21c39-7afa-413b-9feb-137dec75db7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e1b3db2-da4c-4c5c-95e3-ba2f6c0532a3","type":"BasicTicker"}},"id":"56347f48-2a72-479e-9a0c-b73f493b5c28","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"01e21c39-7afa-413b-9feb-137dec75db7f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed403349-19f9-409c-8ebc-c3ecc27473fd","type":"BasicTicker"}},"id":"8549e859-5e54-492b-9aa9-3ce96ffacf8c","type":"Grid"},{"attributes":{},"id":"ed403349-19f9-409c-8ebc-c3ecc27473fd","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7901c728-b35b-41c1-a816-f4a404082d0b","type":"ColumnDataSource"},"glyph":{"id":"b5c81378-ea0b-4f49-8440-c9fb30bcadda","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f504ffa0-98db-4808-8535-eb1284ae7799","type":"Segment"},"selection_glyph":null,"view":{"id":"45e464a9-cb10-422f-91e5-cadd680faa55","type":"CDSView"}},"id":"51cca50a-633f-40ce-b856-6dcb4e5c578d","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"0745fa5a-8c01-41be-a269-e282f4b131e0","type":"LinearAxis"}],"left":[{"id":"512db5e2-ce99-417a-ad00-a20fd50a198e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0745fa5a-8c01-41be-a269-e282f4b131e0","type":"LinearAxis"},{"id":"56347f48-2a72-479e-9a0c-b73f493b5c28","type":"Grid"},{"id":"512db5e2-ce99-417a-ad00-a20fd50a198e","type":"LinearAxis"},{"id":"8549e859-5e54-492b-9aa9-3ce96ffacf8c","type":"Grid"},{"id":"b2bcf041-179d-4b9b-a72b-8b011517c0a8","type":"BoxAnnotation"},{"id":"51cca50a-633f-40ce-b856-6dcb4e5c578d","type":"GlyphRenderer"}],"title":{"id":"9c879309-a717-44c2-9a47-8ad7689fa13f","type":"Title"},"toolbar":{"id":"d549d8b9-d99d-4004-9b6c-74aa5804df02","type":"Toolbar"},"x_range":{"id":"b0862476-f26f-4d58-9bd7-9a9bc47c6cb3","type":"DataRange1d"},"x_scale":{"id":"e13a5bd8-d528-4239-87b3-b934fff62758","type":"LinearScale"},"y_range":{"id":"36d9bd2e-6bf9-4a2e-b6b5-b5c0f12ede98","type":"DataRange1d"},"y_scale":{"id":"3902489f-b184-4afc-9d27-366fac0562b9","type":"LinearScale"}},"id":"01e21c39-7afa-413b-9feb-137dec75db7f","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"b2bcf041-179d-4b9b-a72b-8b011517c0a8","type":"BoxAnnotation"}},"id":"facf9904-8fbf-4647-a7e1-bfaac5a3f697","type":"BoxZoomTool"}],"root_ids":["01e21c39-7afa-413b-9feb-137dec75db7f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"703540f4-5232-4473-bda5-dc14345add88","elementid":"e26598dd-e6b7-4548-93a6-69e1a27a1c7b","modelid":"01e21c39-7afa-413b-9feb-137dec75db7f"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
