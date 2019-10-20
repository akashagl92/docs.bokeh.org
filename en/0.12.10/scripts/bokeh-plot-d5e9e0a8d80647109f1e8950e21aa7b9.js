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
      };var element = document.getElementById("93716179-1582-4d42-bbc7-3c4bcbd497cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93716179-1582-4d42-bbc7-3c4bcbd497cf' but no matching script tag was found. ")
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
                    var docs_json = {"13af4b61-da78-4f72-9bed-9034f9705af4":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"286aa295-6948-4dd5-9577-8f9c1f80516a","subtype":"Figure","type":"Plot"},"ticker":{"id":"17f6d54d-29f3-42e9-a228-b85033f92a62","type":"BasicTicker"}},"id":"6da44eff-1111-4282-bd43-b525935a9022","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"0ff0449c-322e-4933-84ba-0ac15c3e8e46","type":"Circle"},{"attributes":{},"id":"e84a9eb8-4e62-42ae-9128-095f96d7bd13","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"746685e4-feae-4585-b48a-248f232d2ffb","type":"PolyAnnotation"}},"id":"d128ec12-4017-487c-81ea-de3da362c8a1","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"41daef80-b590-464f-8a49-3e1b689e3f0d","type":"Circle"},{"attributes":{"source":{"id":"8876d0ad-a5b5-49b5-bbb4-fd9053ea3f08","type":"ColumnDataSource"}},"id":"62a00df1-be4d-4438-ab26-4d4ed1f946d2","type":"CDSView"},{"attributes":{"below":[{"id":"d16ecb09-855d-4279-a3c9-fa49b806eadf","type":"LinearAxis"}],"left":[{"id":"8f3da755-1101-41d9-9b5f-2b3ed4864189","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d16ecb09-855d-4279-a3c9-fa49b806eadf","type":"LinearAxis"},{"id":"f8874e41-6b72-4c5b-8c36-c44b0f80e2cd","type":"Grid"},{"id":"8f3da755-1101-41d9-9b5f-2b3ed4864189","type":"LinearAxis"},{"id":"797bd666-44df-4eca-86ba-967b32e309ef","type":"Grid"},{"id":"2e641b2c-ffca-4376-8772-4c29fca65ddf","type":"BoxAnnotation"},{"id":"746685e4-feae-4585-b48a-248f232d2ffb","type":"PolyAnnotation"},{"id":"4b7eddd4-94f9-4597-b075-8063fd390a17","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"73074303-c8b8-43e1-a652-470e3f60b45a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0eed15da-d5ef-46fe-9456-a2f337d21d40","type":"DataRange1d"},"x_scale":{"id":"05501855-4050-4dec-9b9d-2059ff8c2b52","type":"LinearScale"},"y_range":{"id":"674120d4-c57a-470e-bd55-690fafa563be","type":"DataRange1d"},"y_scale":{"id":"107e8475-9896-4f7c-8aeb-f496e0ed5090","type":"LinearScale"}},"id":"26f6bb4a-6dbd-4279-a975-cc2d15db79ba","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"df633ecd-2a9a-455e-8596-016f07e6d3ab","type":"DataRange1d"},{"attributes":{"plot":{"id":"286aa295-6948-4dd5-9577-8f9c1f80516a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b925165-d4b9-4334-acb5-a8c3da828e41","type":"BasicTicker"}},"id":"4cda8735-9b40-492a-89cb-f49c573be8e7","type":"Grid"},{"attributes":{"children":[{"id":"307cbbb8-9ca3-4e97-8a5f-8aa58e94874b","type":"ToolbarBox"},{"id":"fd38660a-11a9-46c4-bd54-84406a9b3c40","type":"Column"}]},"id":"9b9dc294-015f-459c-a01d-ec39fa4935ea","type":"Column"},{"attributes":{},"id":"85bc0a1a-3dd7-48ab-96a3-d006f2daa055","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"8d6493dd-97b3-4e00-b156-3061432e70db","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"62eebf4d-70b4-4a02-8ba5-e130cdc1a769","type":"Circle"},{"attributes":{"formatter":{"id":"738dc088-fca9-45ae-9b4d-d410cedacdb4","type":"BasicTickFormatter"},"plot":{"id":"26f6bb4a-6dbd-4279-a975-cc2d15db79ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f56d18a-6c86-417c-a36d-2679faac7dbf","type":"BasicTicker"}},"id":"8f3da755-1101-41d9-9b5f-2b3ed4864189","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"2e641b2c-ffca-4376-8772-4c29fca65ddf","type":"BoxAnnotation"},"renderers":[{"id":"4b7eddd4-94f9-4597-b075-8063fd390a17","type":"GlyphRenderer"}]},"id":"2050257f-e9d3-4e58-bf72-bb3e34beeb54","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"d302bb1c-b0e4-4563-a73e-e9df6a77ccc0","type":"BoxAnnotation"},"renderers":[{"id":"300ef3ca-002a-419e-8364-75659002d20a","type":"GlyphRenderer"}]},"id":"a7fed5c7-7dc3-46f6-b513-cd38bbf2d3bb","type":"BoxSelectTool"},{"attributes":{},"id":"bdfaca9e-e8e3-4c8e-bb07-9f8194882058","type":"HelpTool"},{"attributes":{},"id":"17f6d54d-29f3-42e9-a228-b85033f92a62","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"26f6bb4a-6dbd-4279-a975-cc2d15db79ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f56d18a-6c86-417c-a36d-2679faac7dbf","type":"BasicTicker"}},"id":"797bd666-44df-4eca-86ba-967b32e309ef","type":"Grid"},{"attributes":{"plot":{"id":"26f6bb4a-6dbd-4279-a975-cc2d15db79ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"691d81fa-4d79-4391-a961-707dc2d73ee0","type":"BasicTicker"}},"id":"f8874e41-6b72-4c5b-8c36-c44b0f80e2cd","type":"Grid"},{"attributes":{},"id":"05501855-4050-4dec-9b9d-2059ff8c2b52","type":"LinearScale"},{"attributes":{"data_source":{"id":"8876d0ad-a5b5-49b5-bbb4-fd9053ea3f08","type":"ColumnDataSource"},"glyph":{"id":"62eebf4d-70b4-4a02-8ba5-e130cdc1a769","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16037455-abcd-4697-b76d-4c2cb325afa8","type":"Circle"},"selection_glyph":null,"view":{"id":"62a00df1-be4d-4438-ab26-4d4ed1f946d2","type":"CDSView"}},"id":"4b7eddd4-94f9-4597-b075-8063fd390a17","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"26f6bb4a-6dbd-4279-a975-cc2d15db79ba","subtype":"Figure","type":"Plot"},{"id":"286aa295-6948-4dd5-9577-8f9c1f80516a","subtype":"Figure","type":"Plot"}]},"id":"9a0c5af1-6440-4e80-8e58-ff6cdd73e520","type":"Row"},{"attributes":{"children":[{"id":"9a0c5af1-6440-4e80-8e58-ff6cdd73e520","type":"Row"}]},"id":"fd38660a-11a9-46c4-bd54-84406a9b3c40","type":"Column"},{"attributes":{"below":[{"id":"56c22d8f-1684-4daf-bebc-f6ca0ca8d24d","type":"LinearAxis"}],"left":[{"id":"b76a3ea3-548f-4367-bb8f-2a9d5525acac","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"56c22d8f-1684-4daf-bebc-f6ca0ca8d24d","type":"LinearAxis"},{"id":"4cda8735-9b40-492a-89cb-f49c573be8e7","type":"Grid"},{"id":"b76a3ea3-548f-4367-bb8f-2a9d5525acac","type":"LinearAxis"},{"id":"6da44eff-1111-4282-bd43-b525935a9022","type":"Grid"},{"id":"d302bb1c-b0e4-4563-a73e-e9df6a77ccc0","type":"BoxAnnotation"},{"id":"8d6493dd-97b3-4e00-b156-3061432e70db","type":"PolyAnnotation"},{"id":"300ef3ca-002a-419e-8364-75659002d20a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"4276f234-9fc4-4bc8-ae6e-242366471b59","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f2aa2a87-cd6c-491c-9518-a24472121a78","type":"DataRange1d"},"x_scale":{"id":"85bc0a1a-3dd7-48ab-96a3-d006f2daa055","type":"LinearScale"},"y_range":{"id":"df633ecd-2a9a-455e-8596-016f07e6d3ab","type":"DataRange1d"},"y_scale":{"id":"a17bf501-b979-4c44-b42c-afa9be2dad36","type":"LinearScale"}},"id":"286aa295-6948-4dd5-9577-8f9c1f80516a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3f56d18a-6c86-417c-a36d-2679faac7dbf","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f2aa2a87-cd6c-491c-9518-a24472121a78","type":"DataRange1d"},{"attributes":{},"id":"0b925165-d4b9-4334-acb5-a8c3da828e41","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a7fed5c7-7dc3-46f6-b513-cd38bbf2d3bb","type":"BoxSelectTool"},{"id":"dbb859d5-9342-45be-85ce-a24be0cd292a","type":"LassoSelectTool"},{"id":"b8c5b79f-3ddb-4cee-b693-08c5bf4199d0","type":"HelpTool"}]},"id":"4276f234-9fc4-4bc8-ae6e-242366471b59","type":"Toolbar"},{"attributes":{"source":{"id":"8876d0ad-a5b5-49b5-bbb4-fd9053ea3f08","type":"ColumnDataSource"}},"id":"89267c5d-a70f-4fa1-a256-f8f8831b0f9f","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d302bb1c-b0e4-4563-a73e-e9df6a77ccc0","type":"BoxAnnotation"},{"attributes":{},"id":"a17bf501-b979-4c44-b42c-afa9be2dad36","type":"LinearScale"},{"attributes":{},"id":"738dc088-fca9-45ae-9b4d-d410cedacdb4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8876d0ad-a5b5-49b5-bbb4-fd9053ea3f08","type":"ColumnDataSource"},"glyph":{"id":"41daef80-b590-464f-8a49-3e1b689e3f0d","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0ff0449c-322e-4933-84ba-0ac15c3e8e46","type":"Circle"},"selection_glyph":null,"view":{"id":"89267c5d-a70f-4fa1-a256-f8f8831b0f9f","type":"CDSView"}},"id":"300ef3ca-002a-419e-8364-75659002d20a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"16037455-abcd-4697-b76d-4c2cb325afa8","type":"Circle"},{"attributes":{"formatter":{"id":"45e45e2d-919f-4480-9b48-1c33da27db00","type":"BasicTickFormatter"},"plot":{"id":"286aa295-6948-4dd5-9577-8f9c1f80516a","subtype":"Figure","type":"Plot"},"ticker":{"id":"0b925165-d4b9-4334-acb5-a8c3da828e41","type":"BasicTicker"}},"id":"56c22d8f-1684-4daf-bebc-f6ca0ca8d24d","type":"LinearAxis"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"2050257f-e9d3-4e58-bf72-bb3e34beeb54","type":"BoxSelectTool"},{"id":"d128ec12-4017-487c-81ea-de3da362c8a1","type":"LassoSelectTool"},{"id":"bdfaca9e-e8e3-4c8e-bb07-9f8194882058","type":"HelpTool"},{"id":"a7fed5c7-7dc3-46f6-b513-cd38bbf2d3bb","type":"BoxSelectTool"},{"id":"dbb859d5-9342-45be-85ce-a24be0cd292a","type":"LassoSelectTool"},{"id":"b8c5b79f-3ddb-4cee-b693-08c5bf4199d0","type":"HelpTool"}]},"id":"307cbbb8-9ca3-4e97-8a5f-8aa58e94874b","type":"ToolbarBox"},{"attributes":{},"id":"45e45e2d-919f-4480-9b48-1c33da27db00","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"746685e4-feae-4585-b48a-248f232d2ffb","type":"PolyAnnotation"},{"attributes":{},"id":"107e8475-9896-4f7c-8aeb-f496e0ed5090","type":"LinearScale"},{"attributes":{"callback":null},"id":"0eed15da-d5ef-46fe-9456-a2f337d21d40","type":"DataRange1d"},{"attributes":{},"id":"b8c5b79f-3ddb-4cee-b693-08c5bf4199d0","type":"HelpTool"},{"attributes":{},"id":"691d81fa-4d79-4391-a961-707dc2d73ee0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e84a9eb8-4e62-42ae-9128-095f96d7bd13","type":"BasicTickFormatter"},"plot":{"id":"286aa295-6948-4dd5-9577-8f9c1f80516a","subtype":"Figure","type":"Plot"},"ticker":{"id":"17f6d54d-29f3-42e9-a228-b85033f92a62","type":"BasicTicker"}},"id":"b76a3ea3-548f-4367-bb8f-2a9d5525acac","type":"LinearAxis"},{"attributes":{"callback":null},"id":"674120d4-c57a-470e-bd55-690fafa563be","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"8876d0ad-a5b5-49b5-bbb4-fd9053ea3f08","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2e641b2c-ffca-4376-8772-4c29fca65ddf","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2050257f-e9d3-4e58-bf72-bb3e34beeb54","type":"BoxSelectTool"},{"id":"d128ec12-4017-487c-81ea-de3da362c8a1","type":"LassoSelectTool"},{"id":"bdfaca9e-e8e3-4c8e-bb07-9f8194882058","type":"HelpTool"}]},"id":"73074303-c8b8-43e1-a652-470e3f60b45a","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"8d6493dd-97b3-4e00-b156-3061432e70db","type":"PolyAnnotation"}},"id":"dbb859d5-9342-45be-85ce-a24be0cd292a","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"266341a0-07f6-4286-a362-aa81c393fae6","type":"BasicTickFormatter"},"plot":{"id":"26f6bb4a-6dbd-4279-a975-cc2d15db79ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"691d81fa-4d79-4391-a961-707dc2d73ee0","type":"BasicTicker"}},"id":"d16ecb09-855d-4279-a3c9-fa49b806eadf","type":"LinearAxis"},{"attributes":{},"id":"266341a0-07f6-4286-a362-aa81c393fae6","type":"BasicTickFormatter"}],"root_ids":["9b9dc294-015f-459c-a01d-ec39fa4935ea"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"13af4b61-da78-4f72-9bed-9034f9705af4","elementid":"93716179-1582-4d42-bbc7-3c4bcbd497cf","modelid":"9b9dc294-015f-459c-a01d-ec39fa4935ea"}];
                
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
