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
      };var element = document.getElementById("297162ba-57cc-460f-b5e2-e41a0f3bbc29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '297162ba-57cc-460f-b5e2-e41a0f3bbc29' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"41c7343b-c9b0-41f3-83ff-d9e0c96fece2":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e7ddc14-488a-49e8-a86a-23548fbf0d34","type":"HoverTool"},{"id":"31cfb9cf-032d-42ad-be59-e3d7cb7f3430","type":"TapTool"},{"id":"487a7e6a-4f14-47b0-8aa0-6a921cbbce06","type":"BoxSelectTool"}]},"id":"855ed88a-1e01-4869-8e43-24d7efc485ea","type":"Toolbar"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5d212c71-f71b-49f1-8de0-e92948727881","type":"Range1d"},{"attributes":{"callback":null,"renderers":"auto","tooltips":null},"id":"5e7ddc14-488a-49e8-a86a-23548fbf0d34","type":"HoverTool"},{"attributes":{"callback":null},"id":"31cfb9cf-032d-42ad-be59-e3d7cb7f3430","type":"TapTool"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"ffd59041-eb9f-4cf1-b88c-35f8e530494f","type":"Title"},{"attributes":{},"id":"4a556625-b125-47c8-920b-2ad3663f0de6","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"d2048986-1f26-4fa6-b6f5-f3f969ce41f2","type":"EdgesAndLinkedNodes"},{"attributes":{"fill_color":{"value":"#abdda4"},"size":{"units":"screen","value":15}},"id":"e3d81969-d74b-4122-a948-f5d3c2a5ba57","type":"Circle"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"64e13f13-53c5-4f8e-9cdc-799daac106cf","type":"BoxAnnotation"},{"id":"892847b5-ef81-44e2-84fe-364036c9b494","type":"GraphRenderer"}],"title":{"id":"ffd59041-eb9f-4cf1-b88c-35f8e530494f","type":"Title"},"toolbar":{"id":"855ed88a-1e01-4869-8e43-24d7efc485ea","type":"Toolbar"},"x_range":{"id":"7b3a7e93-1140-4d09-8da9-854604a0aff9","type":"Range1d"},"x_scale":{"id":"b8fe526c-0dff-421e-9530-9df920ab2b7f","type":"LinearScale"},"y_range":{"id":"5d212c71-f71b-49f1-8de0-e92948727881","type":"Range1d"},"y_scale":{"id":"5bdeb153-1f70-4708-b733-378d6d4e0eb7","type":"LinearScale"}},"id":"06d5cc14-fc7a-42e3-b9f3-3452da7d96c8","type":"Plot"},{"attributes":{"line_color":{"value":"#abdda4"},"line_width":{"value":5}},"id":"d57ecbc7-ed21-4ed0-9eb4-e89e9f9b6988","type":"MultiLine"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"selected":{"id":"4114a88c-a20b-4121-9f86-28a5361be968","type":"Selection"},"selection_policy":{"id":"55935682-7bbf-4a41-b68d-c91816eac654","type":"UnionRenderers"}},"id":"faff4415-a51c-4fd6-881c-295f0ab7357c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"faff4415-a51c-4fd6-881c-295f0ab7357c","type":"ColumnDataSource"},"glyph":{"id":"5abcac29-d650-403a-8b4f-9f95a3054e84","type":"Circle"},"hover_glyph":{"id":"e3d81969-d74b-4122-a948-f5d3c2a5ba57","type":"Circle"},"muted_glyph":null,"selection_glyph":{"id":"b3e06c35-cb08-4ee0-933f-e0d052b86c8d","type":"Circle"},"view":{"id":"fef48841-7a35-4a24-982d-1ee4d04a909b","type":"CDSView"}},"id":"96c84e33-580a-415a-b6ba-9f33eb71deb5","type":"GlyphRenderer"},{"attributes":{},"id":"5bdeb153-1f70-4708-b733-378d6d4e0eb7","type":"LinearScale"},{"attributes":{"source":{"id":"faff4415-a51c-4fd6-881c-295f0ab7357c","type":"ColumnDataSource"}},"id":"fef48841-7a35-4a24-982d-1ee4d04a909b","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64e13f13-53c5-4f8e-9cdc-799daac106cf","type":"BoxAnnotation"},{"attributes":{},"id":"55935682-7bbf-4a41-b68d-c91816eac654","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#fdae61"},"line_width":{"value":5}},"id":"aca036c9-9182-4a3a-b2f2-7a971b72ec19","type":"MultiLine"},{"attributes":{},"id":"b8fe526c-0dff-421e-9530-9df920ab2b7f","type":"LinearScale"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"7b3a7e93-1140-4d09-8da9-854604a0aff9","type":"Range1d"},{"attributes":{"callback":null,"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]},"selected":{"id":"179ca3aa-f8f3-4165-945f-c5f4c0e100cb","type":"Selection"},"selection_policy":{"id":"1e357b09-d31c-4fd6-bd8c-b9e184f5fabe","type":"UnionRenderers"}},"id":"b957fdb2-b09c-44d3-89fa-1e0ede2b7589","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b957fdb2-b09c-44d3-89fa-1e0ede2b7589","type":"ColumnDataSource"},"glyph":{"id":"4b433fc9-c3b8-4e25-b96a-272cf4d2e1aa","type":"MultiLine"},"hover_glyph":{"id":"d57ecbc7-ed21-4ed0-9eb4-e89e9f9b6988","type":"MultiLine"},"muted_glyph":null,"selection_glyph":{"id":"aca036c9-9182-4a3a-b2f2-7a971b72ec19","type":"MultiLine"},"view":{"id":"38fd89f7-d2a0-4491-93a9-573b35734191","type":"CDSView"}},"id":"0da156c3-cc63-4fd0-a030-980a119c6f73","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b957fdb2-b09c-44d3-89fa-1e0ede2b7589","type":"ColumnDataSource"}},"id":"38fd89f7-d2a0-4491-93a9-573b35734191","type":"CDSView"},{"attributes":{"edge_renderer":{"id":"0da156c3-cc63-4fd0-a030-980a119c6f73","type":"GlyphRenderer"},"inspection_policy":{"id":"d2048986-1f26-4fa6-b6f5-f3f969ce41f2","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"27fd64bb-6002-4a5b-83b4-ed406a69db46","type":"StaticLayoutProvider"},"node_renderer":{"id":"96c84e33-580a-415a-b6ba-9f33eb71deb5","type":"GlyphRenderer"},"selection_policy":{"id":"4a556625-b125-47c8-920b-2ad3663f0de6","type":"NodesAndLinkedEdges"}},"id":"892847b5-ef81-44e2-84fe-364036c9b494","type":"GraphRenderer"},{"attributes":{"graph_layout":{"0":[1.0,5.200874811222461e-09],"1":[0.9829730987698075,0.18374951687777052],"10":[-0.2736629534524478,0.9618256731695953],"11":[-0.4457383143150295,0.8951633020694276],"12":[-0.6026346669454482,0.7980172083092125],"13":[-0.7390088423744644,0.6736956880896635],"14":[-0.8502171619409874,0.5264321613022418],"15":[-0.9324721677053746,0.3612417925562752],"16":[-0.9829730970167299,0.1837495317789317],"17":[-0.9999999982469223,-8.222190168562394e-08],"18":[-0.9829730970167299,-0.18374946177253734],"19":[-0.9324722273100193,-0.36124172254988085],"2":[0.932472229063097,0.36124167334698576],"20":[-0.8502171619409874,-0.5264320912958473],"21":[-0.7390089019791091,-0.6736956776879138],"22":[-0.6026347265500929,-0.7980171383028182],"23":[-0.44573837391967425,-0.895163291667678],"24":[-0.27366289384780307,-0.9618256627678456],"25":[-0.0922681605182429,-0.9957342087090403],"26":[0.09226818462306245,-0.9957342087090403],"27":[0.27366292540320325,-0.9618256627678456],"28":[0.44573837567275204,-0.895163291667678],"29":[0.6026347283031706,-0.7980171383028182],"3":[0.8502171040894204,0.5264321613022418],"30":[0.7390087845228973,-0.6736957968972033],"31":[0.8502170444847756,-0.5264322701097816],"32":[0.932472229063097,-0.36124169274755846],"33":[0.9829730987698075,-0.18374944687137618],"4":[0.7390089037321868,0.6736956284850187],"5":[0.6026346686985259,0.7980172083092125],"6":[0.4457383458704297,0.8951633020694276],"7":[0.27366298500784797,0.9618256731695953],"8":[0.09226837088757722,0.9957341595061452],"9":[-0.09226833188159647,0.9957341595061452]}},"id":"27fd64bb-6002-4a5b-83b4-ed406a69db46","type":"StaticLayoutProvider"},{"attributes":{},"id":"1e357b09-d31c-4fd6-bd8c-b9e184f5fabe","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"5abcac29-d650-403a-8b4f-9f95a3054e84","type":"Circle"},{"attributes":{},"id":"4114a88c-a20b-4121-9f86-28a5361be968","type":"Selection"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#CCCCCC"},"line_width":{"value":5}},"id":"4b433fc9-c3b8-4e25-b96a-272cf4d2e1aa","type":"MultiLine"},{"attributes":{},"id":"179ca3aa-f8f3-4165-945f-c5f4c0e100cb","type":"Selection"},{"attributes":{"fill_color":{"value":"#fdae61"},"size":{"units":"screen","value":15}},"id":"b3e06c35-cb08-4ee0-933f-e0d052b86c8d","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"64e13f13-53c5-4f8e-9cdc-799daac106cf","type":"BoxAnnotation"}},"id":"487a7e6a-4f14-47b0-8aa0-6a921cbbce06","type":"BoxSelectTool"}],"root_ids":["06d5cc14-fc7a-42e3-b9f3-3452da7d96c8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"41c7343b-c9b0-41f3-83ff-d9e0c96fece2","roots":{"06d5cc14-fc7a-42e3-b9f3-3452da7d96c8":"297162ba-57cc-460f-b5e2-e41a0f3bbc29"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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