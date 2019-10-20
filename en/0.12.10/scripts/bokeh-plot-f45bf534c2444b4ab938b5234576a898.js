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
      };var element = document.getElementById("c9797974-6bc7-4f7b-9d30-1c2d8b03247c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9797974-6bc7-4f7b-9d30-1c2d8b03247c' but no matching script tag was found. ")
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
                    var docs_json = {"9ffe5a8b-2a37-4f5d-8565-bb28d63c5926":{"roots":{"references":[{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"bec7a5f8-2316-42d4-bee0-6d326cd79edc","type":"Range1d"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"72286ff7-9d31-4e8c-a11b-aebc89da801b","type":"ColumnDataSource"},{"attributes":{},"id":"ed8413d5-72f6-48b1-9581-20d06a7e22c5","type":"LinearScale"},{"attributes":{"plot":null,"text":"Networkx Integration Demonstration"},"id":"1866c278-2666-4c98-aed8-b0a94153f441","type":"Title"},{"attributes":{},"id":"7e865048-bbcf-4209-9bf0-6b3152aaaf53","type":"Circle"},{"attributes":{},"id":"cd302217-45d4-4940-83f0-813b254cd42a","type":"BasicTickFormatter"},{"attributes":{},"id":"80af9860-3530-4430-9ec2-b50f2218eec7","type":"NodesOnly"},{"attributes":{},"id":"4f9d32ff-dedf-4cb9-8eba-7b43275013a9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fa2532c3-cd76-4ecc-bc20-f7cf1868e2b3","type":"Toolbar"},{"attributes":{"formatter":{"id":"cd302217-45d4-4940-83f0-813b254cd42a","type":"BasicTickFormatter"},"plot":{"id":"de815698-957e-4caa-bbd7-91cedcb7b511","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9a48822-59a0-4a92-988d-95dd0680d0e6","type":"BasicTicker"}},"id":"786125c4-75ad-4335-be1f-6df2f2a0a379","type":"LinearAxis"},{"attributes":{"data_source":{"id":"72286ff7-9d31-4e8c-a11b-aebc89da801b","type":"ColumnDataSource"},"glyph":{"id":"7e865048-bbcf-4209-9bf0-6b3152aaaf53","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4a44f293-d4ef-4cf8-9d0a-e78a1c716f72","type":"CDSView"}},"id":"96e9640f-7073-43a6-852b-2f0d39cdc0d7","type":"GlyphRenderer"},{"attributes":{"edge_renderer":{"id":"3eb9edbb-1058-45df-b9c8-9797064b88b5","type":"GlyphRenderer"},"inspection_policy":{"id":"cb4660a7-8ba5-4410-8509-bcec6f725781","type":"NodesOnly"},"layout_provider":{"id":"957e8673-1685-40c7-8da6-1a90f26cbaaa","type":"StaticLayoutProvider"},"node_renderer":{"id":"96e9640f-7073-43a6-852b-2f0d39cdc0d7","type":"GlyphRenderer"},"selection_policy":{"id":"80af9860-3530-4430-9ec2-b50f2218eec7","type":"NodesOnly"}},"id":"ca5d1829-8ad7-4827-a630-e5fdf7f348b9","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"6796742e-ffda-4359-9143-77d09e2709a7","type":"Range1d"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"34fa9ce8-37cc-4dff-92a3-32d9c5aee33f","type":"ColumnDataSource"},{"attributes":{},"id":"1e2ac3cc-6582-42c7-b769-7350e4f3bedb","type":"LinearScale"},{"attributes":{},"id":"e9a48822-59a0-4a92-988d-95dd0680d0e6","type":"BasicTicker"},{"attributes":{"source":{"id":"72286ff7-9d31-4e8c-a11b-aebc89da801b","type":"ColumnDataSource"}},"id":"4a44f293-d4ef-4cf8-9d0a-e78a1c716f72","type":"CDSView"},{"attributes":{},"id":"492007a4-8c10-4cb8-bf18-48c419666bd7","type":"BasicTicker"},{"attributes":{},"id":"2b838025-2e30-4675-93d0-8ab485d49787","type":"MultiLine"},{"attributes":{"formatter":{"id":"4f9d32ff-dedf-4cb9-8eba-7b43275013a9","type":"BasicTickFormatter"},"plot":{"id":"de815698-957e-4caa-bbd7-91cedcb7b511","subtype":"Figure","type":"Plot"},"ticker":{"id":"492007a4-8c10-4cb8-bf18-48c419666bd7","type":"BasicTicker"}},"id":"31f31ba2-b96a-49c0-82cc-5f39301f15f5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"34fa9ce8-37cc-4dff-92a3-32d9c5aee33f","type":"ColumnDataSource"},"glyph":{"id":"2b838025-2e30-4675-93d0-8ab485d49787","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5624b270-edae-4408-a976-52cf697e3b4d","type":"CDSView"}},"id":"3eb9edbb-1058-45df-b9c8-9797064b88b5","type":"GlyphRenderer"},{"attributes":{"graph_layout":{"0":[0.3578488936227491,0.4012301295764633],"1":[0.5818984515331753,0.14724451012140505],"10":[-0.056613782400863566,0.9141346591913382],"11":[0.5022292426535895,0.8784209616848935],"12":[0.7483488482879714,0.6847524145361834],"13":[0.4600201055673694,-0.07562832707576883],"14":[-0.8707624579701292,-0.3272363206623248],"15":[0.08040460709353892,-0.9700596748521352],"16":[-0.4299942428959739,0.8911090146798297],"17":[0.9634404975136484,0.3061369280583508],"18":[-0.7527034653491982,-0.6503600677990703],"19":[0.051483879732835414,0.22676364332908072],"2":[0.379434125005488,-0.282439290610773],"20":[-0.7624635773563326,-0.06767727958567193],"21":[0.8662367891076368,0.524842145823071],"22":[-0.11217632270508948,-0.9967665895062336],"23":[-0.5999062152938714,-0.7963140719014841],"24":[-0.2477472330141074,-1.0],"25":[-0.4285189636729645,-0.9311405868576191],"26":[-1.0,-0.14415643049929516],"27":[-0.07623355396547571,-0.7727531479216879],"28":[0.3544201398345139,-0.7070087496288116],"29":[-0.8668709813975951,-0.510040560303563],"3":[0.8023873236632608,0.1678920161725097],"30":[0.04963270941407383,-0.15243076776555653],"31":[0.023536404022701296,-0.49498066349875247],"32":[-0.3683531526216932,-0.4886045778672211],"33":[-0.23923556158011872,-0.4328764571030207],"4":[0.06824833886266846,1.0],"5":[-0.19691961838237737,0.9717827797245844],"6":[0.17729591243941334,0.9827079144227795],"7":[0.8958291261669051,-0.0593818681879682],"8":[-0.11294431862709164,-0.013642104515337317],"9":[0.522532488542294,-0.8188189911202235]}},"id":"957e8673-1685-40c7-8da6-1a90f26cbaaa","type":"StaticLayoutProvider"},{"attributes":{"plot":{"id":"de815698-957e-4caa-bbd7-91cedcb7b511","subtype":"Figure","type":"Plot"},"ticker":{"id":"492007a4-8c10-4cb8-bf18-48c419666bd7","type":"BasicTicker"}},"id":"fc719039-ca47-4262-a54c-c8e922399916","type":"Grid"},{"attributes":{},"id":"cb4660a7-8ba5-4410-8509-bcec6f725781","type":"NodesOnly"},{"attributes":{"below":[{"id":"31f31ba2-b96a-49c0-82cc-5f39301f15f5","type":"LinearAxis"}],"left":[{"id":"786125c4-75ad-4335-be1f-6df2f2a0a379","type":"LinearAxis"}],"renderers":[{"id":"31f31ba2-b96a-49c0-82cc-5f39301f15f5","type":"LinearAxis"},{"id":"fc719039-ca47-4262-a54c-c8e922399916","type":"Grid"},{"id":"786125c4-75ad-4335-be1f-6df2f2a0a379","type":"LinearAxis"},{"id":"57114b6a-1fef-4f60-911a-8047c8b3e7dd","type":"Grid"},{"id":"ca5d1829-8ad7-4827-a630-e5fdf7f348b9","type":"GraphRenderer"}],"title":{"id":"1866c278-2666-4c98-aed8-b0a94153f441","type":"Title"},"toolbar":{"id":"fa2532c3-cd76-4ecc-bc20-f7cf1868e2b3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6796742e-ffda-4359-9143-77d09e2709a7","type":"Range1d"},"x_scale":{"id":"1e2ac3cc-6582-42c7-b769-7350e4f3bedb","type":"LinearScale"},"y_range":{"id":"bec7a5f8-2316-42d4-bee0-6d326cd79edc","type":"Range1d"},"y_scale":{"id":"ed8413d5-72f6-48b1-9581-20d06a7e22c5","type":"LinearScale"}},"id":"de815698-957e-4caa-bbd7-91cedcb7b511","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"34fa9ce8-37cc-4dff-92a3-32d9c5aee33f","type":"ColumnDataSource"}},"id":"5624b270-edae-4408-a976-52cf697e3b4d","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"de815698-957e-4caa-bbd7-91cedcb7b511","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9a48822-59a0-4a92-988d-95dd0680d0e6","type":"BasicTicker"}},"id":"57114b6a-1fef-4f60-911a-8047c8b3e7dd","type":"Grid"}],"root_ids":["de815698-957e-4caa-bbd7-91cedcb7b511"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"9ffe5a8b-2a37-4f5d-8565-bb28d63c5926","elementid":"c9797974-6bc7-4f7b-9d30-1c2d8b03247c","modelid":"de815698-957e-4caa-bbd7-91cedcb7b511"}];
                
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
