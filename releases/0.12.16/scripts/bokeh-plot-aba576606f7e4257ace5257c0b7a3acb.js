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
      };var element = document.getElementById("3a37b3b0-bf5d-41e6-b9ec-5809ced61d1e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a37b3b0-bf5d-41e6-b9ec-5809ced61d1e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"649d4809-9569-4fed-ad7f-22ec8a3cad74":{"roots":{"references":[{"attributes":{},"id":"572de529-f188-4339-a15f-4c9e15271975","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"8172c620-1eed-41f4-a3e9-6585d061306e","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"8f9c3edd-9831-4348-a0eb-02a3ec22d48d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c47e145a-d1a3-4c40-9040-dc68b5f40912","type":"CategoricalTicker"}},"id":"7d6901d2-fd84-4b68-9e0f-f4cf7a2022bc","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"74d6d177-50f1-4c44-8407-eb2e547b3df8","type":"ColumnDataSource"},"glyph":{"id":"73fae15d-914d-4584-b23b-dbc76966b250","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3c0dc67a-add6-45e1-968a-6bbf9932393f","type":"VBar"},"selection_glyph":null,"view":{"id":"2f541b1a-251d-4a94-ad38-cb054f57246c","type":"CDSView"}},"id":"957d1e0e-526e-4aaa-9a42-3e39e07a02dd","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"cba4a0f1-195e-43cd-9993-c27d9e03c94c","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"b3958f3a-56b4-4580-a3be-214dc5786efa","type":"Selection"},"selection_policy":{"id":"3599bdc9-937c-4752-92ac-5fe437c85f30","type":"UnionRenderers"}},"id":"043e5983-4045-43cd-bee4-10af3cdb6617","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"dfdc9294-5c48-45be-b971-740b93cf92ab","type":"Title"},{"attributes":{},"id":"3599bdc9-937c-4752-92ac-5fe437c85f30","type":"UnionRenderers"},{"attributes":{},"id":"c47e145a-d1a3-4c40-9040-dc68b5f40912","type":"CategoricalTicker"},{"attributes":{},"id":"b3958f3a-56b4-4580-a3be-214dc5786efa","type":"Selection"},{"attributes":{},"id":"273907fa-439d-4de5-86f3-c7732942c861","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"3c0dc67a-add6-45e1-968a-6bbf9932393f","type":"VBar"},{"attributes":{},"id":"0e8852ab-1271-4f7a-92dc-d2764beaf27e","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"043e5983-4045-43cd-bee4-10af3cdb6617","type":"ColumnDataSource"},"glyph":{"id":"5e38c8a5-3ca1-4521-b169-6418c0fadbaf","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b55c6be2-c5d3-4ff1-ae71-1372b86f4d26","type":"Line"},"selection_glyph":null,"view":{"id":"039ef42b-bb77-4e92-979c-cf24c4e155e0","type":"CDSView"}},"id":"3e4d719d-cdc7-47a4-a903-07887785e56a","type":"GlyphRenderer"},{"attributes":{},"id":"e4768cc9-0621-4045-85f6-9b1d7518be31","type":"Selection"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"e4768cc9-0621-4045-85f6-9b1d7518be31","type":"Selection"},"selection_policy":{"id":"0e8852ab-1271-4f7a-92dc-d2764beaf27e","type":"UnionRenderers"}},"id":"74d6d177-50f1-4c44-8407-eb2e547b3df8","type":"ColumnDataSource"},{"attributes":{},"id":"8172c620-1eed-41f4-a3e9-6585d061306e","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"043e5983-4045-43cd-bee4-10af3cdb6617","type":"ColumnDataSource"}},"id":"039ef42b-bb77-4e92-979c-cf24c4e155e0","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a1ea0a19-5350-406a-91d8-e375d50b75fc","type":"Toolbar"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"5e38c8a5-3ca1-4521-b169-6418c0fadbaf","type":"Line"},{"attributes":{"formatter":{"id":"273907fa-439d-4de5-86f3-c7732942c861","type":"BasicTickFormatter"},"plot":{"id":"8f9c3edd-9831-4348-a0eb-02a3ec22d48d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb15110c-7c7a-458f-8bce-fdd79d0b3278","type":"BasicTicker"}},"id":"030b788e-fa38-4389-91fd-6e79cc6d78ef","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8f9c3edd-9831-4348-a0eb-02a3ec22d48d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb15110c-7c7a-458f-8bce-fdd79d0b3278","type":"BasicTicker"}},"id":"a136894e-2161-40d7-99a5-30e0b8c2896b","type":"Grid"},{"attributes":{"below":[{"id":"7d6901d2-fd84-4b68-9e0f-f4cf7a2022bc","type":"CategoricalAxis"}],"left":[{"id":"030b788e-fa38-4389-91fd-6e79cc6d78ef","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"7d6901d2-fd84-4b68-9e0f-f4cf7a2022bc","type":"CategoricalAxis"},{"id":"985f5f02-4673-45fd-9db4-0d2df6bbb292","type":"Grid"},{"id":"030b788e-fa38-4389-91fd-6e79cc6d78ef","type":"LinearAxis"},{"id":"a136894e-2161-40d7-99a5-30e0b8c2896b","type":"Grid"},{"id":"957d1e0e-526e-4aaa-9a42-3e39e07a02dd","type":"GlyphRenderer"},{"id":"3e4d719d-cdc7-47a4-a903-07887785e56a","type":"GlyphRenderer"}],"title":{"id":"dfdc9294-5c48-45be-b971-740b93cf92ab","type":"Title"},"toolbar":{"id":"a1ea0a19-5350-406a-91d8-e375d50b75fc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"83c897ad-a049-4133-99c8-b9467797c239","type":"FactorRange"},"x_scale":{"id":"572de529-f188-4339-a15f-4c9e15271975","type":"CategoricalScale"},"y_range":{"id":"cba4a0f1-195e-43cd-9993-c27d9e03c94c","type":"DataRange1d"},"y_scale":{"id":"48f4ee12-65f5-4d5a-ad47-e7f66bda49de","type":"LinearScale"}},"id":"8f9c3edd-9831-4348-a0eb-02a3ec22d48d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fb15110c-7c7a-458f-8bce-fdd79d0b3278","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8f9c3edd-9831-4348-a0eb-02a3ec22d48d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c47e145a-d1a3-4c40-9040-dc68b5f40912","type":"CategoricalTicker"}},"id":"985f5f02-4673-45fd-9db4-0d2df6bbb292","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"73fae15d-914d-4584-b23b-dbc76966b250","type":"VBar"},{"attributes":{},"id":"48f4ee12-65f5-4d5a-ad47-e7f66bda49de","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"b55c6be2-c5d3-4ff1-ae71-1372b86f4d26","type":"Line"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"83c897ad-a049-4133-99c8-b9467797c239","type":"FactorRange"},{"attributes":{"source":{"id":"74d6d177-50f1-4c44-8407-eb2e547b3df8","type":"ColumnDataSource"}},"id":"2f541b1a-251d-4a94-ad38-cb054f57246c","type":"CDSView"}],"root_ids":["8f9c3edd-9831-4348-a0eb-02a3ec22d48d"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"649d4809-9569-4fed-ad7f-22ec8a3cad74","elementid":"3a37b3b0-bf5d-41e6-b9ec-5809ced61d1e","modelid":"8f9c3edd-9831-4348-a0eb-02a3ec22d48d"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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