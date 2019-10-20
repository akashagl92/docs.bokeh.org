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
      };var element = document.getElementById("9a319974-9722-422c-888e-ae08b5548c66");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a319974-9722-422c-888e-ae08b5548c66' but no matching script tag was found. ")
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
                    var docs_json = {"9e9b6c2d-89ec-4448-a6e3-979ae4b7948d":{"roots":{"references":[{"attributes":{"source":{"id":"4fda236f-a133-4868-a277-a0a615c498f8","type":"ColumnDataSource"}},"id":"b4796b86-a563-4a14-8e1e-c3b3b558344d","type":"CDSView"},{"attributes":{"formatter":{"id":"f7583e9d-2ffd-49d8-b153-e2d6f3794d60","type":"CategoricalTickFormatter"},"plot":{"id":"f9ce8258-b647-4a05-972e-1f4674318db8","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb01a762-50b7-4a9c-b081-ff72bb77df56","type":"CategoricalTicker"}},"id":"6c804bee-5e81-44f6-949f-a45c3e30aebf","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"e4c48d69-ad82-44b5-9a72-4f6b6c4447ab","type":"VBar"},{"attributes":{},"id":"f7583e9d-2ffd-49d8-b153-e2d6f3794d60","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"aefcb3b6-3b7c-4493-aedd-ff112855bf89","type":"BasicTickFormatter"},"plot":{"id":"f9ce8258-b647-4a05-972e-1f4674318db8","subtype":"Figure","type":"Plot"},"ticker":{"id":"43c876de-7ad9-4cce-b48b-1d02b5ae9571","type":"BasicTicker"}},"id":"de2695df-90ee-42f0-9a0b-c8caf3952387","type":"LinearAxis"},{"attributes":{"below":[{"id":"6c804bee-5e81-44f6-949f-a45c3e30aebf","type":"CategoricalAxis"}],"left":[{"id":"de2695df-90ee-42f0-9a0b-c8caf3952387","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"6c804bee-5e81-44f6-949f-a45c3e30aebf","type":"CategoricalAxis"},{"id":"5047d721-23c5-406b-94af-97edf68aa00b","type":"Grid"},{"id":"de2695df-90ee-42f0-9a0b-c8caf3952387","type":"LinearAxis"},{"id":"333bb20f-a122-4c16-aaf7-1267e2319acd","type":"Grid"},{"id":"65b30baa-fa41-4f6f-9420-710ebe8bb2d3","type":"GlyphRenderer"}],"title":{"id":"417384df-39ec-4e60-95d0-252fe44960a0","type":"Title"},"toolbar":{"id":"a13edfe9-26a6-4ac7-a238-d5c61d0be273","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a1d8e8a4-6892-440d-bb75-a5bccf056925","type":"FactorRange"},"x_scale":{"id":"45327334-f049-41c8-a43b-9e0801f5c107","type":"CategoricalScale"},"y_range":{"id":"22bba1e7-ca29-4db6-a2fb-2ff0b99d939c","type":"DataRange1d"},"y_scale":{"id":"ffba66c9-7ac1-4499-8477-7e8943395e56","type":"LinearScale"}},"id":"f9ce8258-b647-4a05-972e-1f4674318db8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43c876de-7ad9-4cce-b48b-1d02b5ae9571","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f9ce8258-b647-4a05-972e-1f4674318db8","subtype":"Figure","type":"Plot"},"ticker":{"id":"43c876de-7ad9-4cce-b48b-1d02b5ae9571","type":"BasicTicker"}},"id":"333bb20f-a122-4c16-aaf7-1267e2319acd","type":"Grid"},{"attributes":{},"id":"ffba66c9-7ac1-4499-8477-7e8943395e56","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"4fda236f-a133-4868-a277-a0a615c498f8","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"417384df-39ec-4e60-95d0-252fe44960a0","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"a1d8e8a4-6892-440d-bb75-a5bccf056925","type":"FactorRange"},{"attributes":{"callback":null,"start":0},"id":"22bba1e7-ca29-4db6-a2fb-2ff0b99d939c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a13edfe9-26a6-4ac7-a238-d5c61d0be273","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"f9ce8258-b647-4a05-972e-1f4674318db8","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb01a762-50b7-4a9c-b081-ff72bb77df56","type":"CategoricalTicker"}},"id":"5047d721-23c5-406b-94af-97edf68aa00b","type":"Grid"},{"attributes":{},"id":"aefcb3b6-3b7c-4493-aedd-ff112855bf89","type":"BasicTickFormatter"},{"attributes":{},"id":"cb01a762-50b7-4a9c-b081-ff72bb77df56","type":"CategoricalTicker"},{"attributes":{},"id":"45327334-f049-41c8-a43b-9e0801f5c107","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"0fa846cd-9bfa-429b-a78d-7333d6e339f2","type":"VBar"},{"attributes":{"data_source":{"id":"4fda236f-a133-4868-a277-a0a615c498f8","type":"ColumnDataSource"},"glyph":{"id":"0fa846cd-9bfa-429b-a78d-7333d6e339f2","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e4c48d69-ad82-44b5-9a72-4f6b6c4447ab","type":"VBar"},"selection_glyph":null,"view":{"id":"b4796b86-a563-4a14-8e1e-c3b3b558344d","type":"CDSView"}},"id":"65b30baa-fa41-4f6f-9420-710ebe8bb2d3","type":"GlyphRenderer"}],"root_ids":["f9ce8258-b647-4a05-972e-1f4674318db8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"9e9b6c2d-89ec-4448-a6e3-979ae4b7948d","elementid":"9a319974-9722-422c-888e-ae08b5548c66","modelid":"f9ce8258-b647-4a05-972e-1f4674318db8"}];
                
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
