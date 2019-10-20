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
      };var element = document.getElementById("25d53eda-f636-4046-af87-ba5d2f898ec3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '25d53eda-f636-4046-af87-ba5d2f898ec3' but no matching script tag was found. ")
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
                    var docs_json = {"a542f47f-27e6-491e-bd1e-3565169a9fb4":{"roots":{"references":[{"attributes":{},"id":"d30a9f8e-9ceb-42e1-b3a3-d0e9ff6644b1","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"92b14128-e6cc-45f6-bc07-4404a2083cfe","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f113de4f-3951-479b-8937-72a77fa67bb7","type":"Circle"},{"attributes":{},"id":"d56ab235-cc41-469a-ab66-45b971ae7e11","type":"HelpTool"},{"attributes":{},"id":"a4f998cd-cd58-4de2-b236-d176eb19f49a","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"61e407d8-aa45-4a52-a30c-c5bc3f40aeab","type":"PanTool"},{"id":"d30a9f8e-9ceb-42e1-b3a3-d0e9ff6644b1","type":"WheelZoomTool"},{"id":"a64ad3d4-a2c6-4a0f-9668-b40b3b12bd46","type":"BoxZoomTool"},{"id":"86f1e6af-b9af-4f82-a156-0bba4913bb30","type":"SaveTool"},{"id":"d1d9d298-40fd-4716-8f95-52447c4ad7e6","type":"ResetTool"},{"id":"d56ab235-cc41-469a-ab66-45b971ae7e11","type":"HelpTool"}]},"id":"e34bb2e1-13fd-46b6-887e-8cee60c78e32","type":"Toolbar"},{"attributes":{},"id":"a1c19576-b422-449c-9e1f-31b197ad3ea8","type":"LinearScale"},{"attributes":{"formatter":{"id":"37ea19e6-d761-4bac-9181-9d57ee609849","type":"BasicTickFormatter"},"plot":{"id":"a3c3d68b-dbc3-4933-86f8-5e3f08293676","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4f998cd-cd58-4de2-b236-d176eb19f49a","type":"BasicTicker"}},"id":"23bf106d-fb20-476c-b07e-afea12cea988","type":"LinearAxis"},{"attributes":{"plot":{"id":"a3c3d68b-dbc3-4933-86f8-5e3f08293676","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4f998cd-cd58-4de2-b236-d176eb19f49a","type":"BasicTicker"}},"id":"ee4a96b2-6d76-4900-bb2c-9b17547a311c","type":"Grid"},{"attributes":{"callback":null},"id":"aaa75f88-f8d7-496a-b653-eaea994f2716","type":"DataRange1d"},{"attributes":{"below":[{"id":"23bf106d-fb20-476c-b07e-afea12cea988","type":"LinearAxis"}],"left":[{"id":"57cd4d96-05c5-4cdf-ae06-de503470f810","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"23bf106d-fb20-476c-b07e-afea12cea988","type":"LinearAxis"},{"id":"ee4a96b2-6d76-4900-bb2c-9b17547a311c","type":"Grid"},{"id":"57cd4d96-05c5-4cdf-ae06-de503470f810","type":"LinearAxis"},{"id":"37f3bcf6-7b37-4a56-8a5e-ac717d6a69cd","type":"Grid"},{"id":"ddc4dad0-b39d-47dd-bbd7-b83ce5d98f18","type":"BoxAnnotation"},{"id":"a855210f-ee00-4753-a26b-9841a8e9f838","type":"GlyphRenderer"}],"title":{"id":"e58661e5-bc67-4e91-95e1-cf9ed3462ad8","type":"Title"},"title_location":"left","toolbar":{"id":"e34bb2e1-13fd-46b6-887e-8cee60c78e32","type":"Toolbar"},"x_range":{"id":"92b14128-e6cc-45f6-bc07-4404a2083cfe","type":"DataRange1d"},"x_scale":{"id":"a1c19576-b422-449c-9e1f-31b197ad3ea8","type":"LinearScale"},"y_range":{"id":"aaa75f88-f8d7-496a-b653-eaea994f2716","type":"DataRange1d"},"y_scale":{"id":"dcc4d272-9b5c-4add-8870-7a35dc75ce6a","type":"LinearScale"}},"id":"a3c3d68b-dbc3-4933-86f8-5e3f08293676","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc56d1c6-8104-4d91-b657-14358a6a3863","type":"Circle"},{"attributes":{"formatter":{"id":"82cb2901-edcf-4762-b4eb-e072e2bad1bc","type":"BasicTickFormatter"},"plot":{"id":"a3c3d68b-dbc3-4933-86f8-5e3f08293676","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8503f04-a997-48df-9bd2-1a4271fd5390","type":"BasicTicker"}},"id":"57cd4d96-05c5-4cdf-ae06-de503470f810","type":"LinearAxis"},{"attributes":{},"id":"61e407d8-aa45-4a52-a30c-c5bc3f40aeab","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"a3c3d68b-dbc3-4933-86f8-5e3f08293676","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8503f04-a997-48df-9bd2-1a4271fd5390","type":"BasicTicker"}},"id":"37f3bcf6-7b37-4a56-8a5e-ac717d6a69cd","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"c09e8a67-0789-4b33-90c4-62e43a628397","type":"ColumnDataSource"},{"attributes":{},"id":"37ea19e6-d761-4bac-9181-9d57ee609849","type":"BasicTickFormatter"},{"attributes":{},"id":"d1d9d298-40fd-4716-8f95-52447c4ad7e6","type":"ResetTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"e58661e5-bc67-4e91-95e1-cf9ed3462ad8","type":"Title"},{"attributes":{},"id":"86f1e6af-b9af-4f82-a156-0bba4913bb30","type":"SaveTool"},{"attributes":{"overlay":{"id":"ddc4dad0-b39d-47dd-bbd7-b83ce5d98f18","type":"BoxAnnotation"}},"id":"a64ad3d4-a2c6-4a0f-9668-b40b3b12bd46","type":"BoxZoomTool"},{"attributes":{},"id":"dcc4d272-9b5c-4add-8870-7a35dc75ce6a","type":"LinearScale"},{"attributes":{"source":{"id":"c09e8a67-0789-4b33-90c4-62e43a628397","type":"ColumnDataSource"}},"id":"6c3d2b62-cac6-47c4-b0ae-891a8717f20b","type":"CDSView"},{"attributes":{},"id":"82cb2901-edcf-4762-b4eb-e072e2bad1bc","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ddc4dad0-b39d-47dd-bbd7-b83ce5d98f18","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"c09e8a67-0789-4b33-90c4-62e43a628397","type":"ColumnDataSource"},"glyph":{"id":"dc56d1c6-8104-4d91-b657-14358a6a3863","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f113de4f-3951-479b-8937-72a77fa67bb7","type":"Circle"},"selection_glyph":null,"view":{"id":"6c3d2b62-cac6-47c4-b0ae-891a8717f20b","type":"CDSView"}},"id":"a855210f-ee00-4753-a26b-9841a8e9f838","type":"GlyphRenderer"},{"attributes":{},"id":"a8503f04-a997-48df-9bd2-1a4271fd5390","type":"BasicTicker"}],"root_ids":["a3c3d68b-dbc3-4933-86f8-5e3f08293676"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a542f47f-27e6-491e-bd1e-3565169a9fb4","elementid":"25d53eda-f636-4046-af87-ba5d2f898ec3","modelid":"a3c3d68b-dbc3-4933-86f8-5e3f08293676"}];
                
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
