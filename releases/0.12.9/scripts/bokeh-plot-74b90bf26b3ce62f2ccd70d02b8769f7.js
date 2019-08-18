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
      };var element = document.getElementById("00b1fba1-6426-450e-b1fa-a2c72cd8f19f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '00b1fba1-6426-450e-b1fa-a2c72cd8f19f' but no matching script tag was found. ")
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
                    var docs_json = {"ac899c97-d971-4467-98f3-adce4f2dbd0e":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#fdae61"},"size":{"units":"screen","value":15}},"id":"b85ee6f8-a74b-4ce1-a71f-d951127f7d5a","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"40b1ec26-1d80-4928-a39e-af5af82d4af9","type":"HoverTool"},{"id":"b5c7be3a-ed3c-4cf0-a395-5a66a1ad98af","type":"TapTool"},{"id":"792ccd62-0b78-466c-a042-6443646462c7","type":"BoxSelectTool"}]},"id":"0a07a2c1-0808-4ba0-9f1f-aece477f3cfd","type":"Toolbar"},{"attributes":{"line_color":{"value":"#abdda4"},"line_width":{"value":5}},"id":"f7a946b9-d15d-4ea2-8ed5-df6d84286fdb","type":"MultiLine"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"64ab3efd-79a7-4326-b7d5-11ecd2d4cf9b","type":"BoxAnnotation"},{"id":"d8656ce5-75fd-4097-bee0-238aada44c41","type":"GraphRenderer"}],"title":{"id":"63ac1e71-aeed-4cbe-baf8-dce3a351c739","type":"Title"},"toolbar":{"id":"0a07a2c1-0808-4ba0-9f1f-aece477f3cfd","type":"Toolbar"},"x_range":{"id":"b5e949b3-2aa8-4845-8973-740dd1c9c7b6","type":"Range1d"},"x_scale":{"id":"c29674ba-0f76-46b8-b48a-367a848aa570","type":"LinearScale"},"y_range":{"id":"8b579e64-24d0-4a2b-81e4-6cc775db7904","type":"Range1d"},"y_scale":{"id":"a81e3cd6-27a2-4982-834b-60b0c56f08c8","type":"LinearScale"}},"id":"e49d03b6-0bab-4781-bc7b-659b0f4a5cf0","type":"Plot"},{"attributes":{"line_color":{"value":"#fdae61"},"line_width":{"value":5}},"id":"fd22dd96-d7a3-4cec-bb67-588f80145ea1","type":"MultiLine"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"8b579e64-24d0-4a2b-81e4-6cc775db7904","type":"Range1d"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"b5e949b3-2aa8-4845-8973-740dd1c9c7b6","type":"Range1d"},{"attributes":{"fill_color":{"value":"#abdda4"},"size":{"units":"screen","value":15}},"id":"d8e99a81-a5b8-4d3f-8949-b46e5e61814e","type":"Circle"},{"attributes":{"edge_renderer":{"id":"ae9b31f2-3a23-42b1-9a32-0294632447cd","type":"GlyphRenderer"},"inspection_policy":{"id":"0d66e9eb-bc30-4e48-ba8e-ef8627c391d5","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"515693d7-6988-4109-b4ca-2833f728ee57","type":"StaticLayoutProvider"},"node_renderer":{"id":"e00b5d82-9870-4e22-9ebe-618f920d1bc3","type":"GlyphRenderer"},"selection_policy":{"id":"6c300dbc-e934-43be-b5e1-de30f2f9373d","type":"NodesAndLinkedEdges"}},"id":"d8656ce5-75fd-4097-bee0-238aada44c41","type":"GraphRenderer"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#CCCCCC"},"line_width":{"value":5}},"id":"a7ac943d-6ff2-481d-8744-51dde6b9ee88","type":"MultiLine"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"58885271-3a68-4ebf-8866-ba04d3e1c7dc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3dc1895f-4ba8-4352-8b5b-7de9380702d0","type":"ColumnDataSource"},"glyph":{"id":"6ec56143-c432-4ae3-aae2-046c0e3d05d4","type":"Circle"},"hover_glyph":{"id":"d8e99a81-a5b8-4d3f-8949-b46e5e61814e","type":"Circle"},"muted_glyph":null,"selection_glyph":{"id":"b85ee6f8-a74b-4ce1-a71f-d951127f7d5a","type":"Circle"},"view":{"id":"cf000f70-4a33-493f-8d43-d673a2b18ccd","type":"CDSView"}},"id":"e00b5d82-9870-4e22-9ebe-618f920d1bc3","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"64ab3efd-79a7-4326-b7d5-11ecd2d4cf9b","type":"BoxAnnotation"}},"id":"792ccd62-0b78-466c-a042-6443646462c7","type":"BoxSelectTool"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"3dc1895f-4ba8-4352-8b5b-7de9380702d0","type":"ColumnDataSource"},{"attributes":{"callback":null,"tooltips":null},"id":"40b1ec26-1d80-4928-a39e-af5af82d4af9","type":"HoverTool"},{"attributes":{},"id":"0d66e9eb-bc30-4e48-ba8e-ef8627c391d5","type":"EdgesAndLinkedNodes"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"63ac1e71-aeed-4cbe-baf8-dce3a351c739","type":"Title"},{"attributes":{},"id":"6c300dbc-e934-43be-b5e1-de30f2f9373d","type":"NodesAndLinkedEdges"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64ab3efd-79a7-4326-b7d5-11ecd2d4cf9b","type":"BoxAnnotation"},{"attributes":{"source":{"id":"3dc1895f-4ba8-4352-8b5b-7de9380702d0","type":"ColumnDataSource"}},"id":"cf000f70-4a33-493f-8d43-d673a2b18ccd","type":"CDSView"},{"attributes":{},"id":"c29674ba-0f76-46b8-b48a-367a848aa570","type":"LinearScale"},{"attributes":{"callback":null},"id":"b5c7be3a-ed3c-4cf0-a395-5a66a1ad98af","type":"TapTool"},{"attributes":{},"id":"a81e3cd6-27a2-4982-834b-60b0c56f08c8","type":"LinearScale"},{"attributes":{"data_source":{"id":"58885271-3a68-4ebf-8866-ba04d3e1c7dc","type":"ColumnDataSource"},"glyph":{"id":"a7ac943d-6ff2-481d-8744-51dde6b9ee88","type":"MultiLine"},"hover_glyph":{"id":"f7a946b9-d15d-4ea2-8ed5-df6d84286fdb","type":"MultiLine"},"muted_glyph":null,"selection_glyph":{"id":"fd22dd96-d7a3-4cec-bb67-588f80145ea1","type":"MultiLine"},"view":{"id":"a98496fc-1eae-44f4-8a62-5b002dcc5c9d","type":"CDSView"}},"id":"ae9b31f2-3a23-42b1-9a32-0294632447cd","type":"GlyphRenderer"},{"attributes":{"source":{"id":"58885271-3a68-4ebf-8866-ba04d3e1c7dc","type":"ColumnDataSource"}},"id":"a98496fc-1eae-44f4-8a62-5b002dcc5c9d","type":"CDSView"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.9829730996839018,0.18374951781657034],"10":[-0.2736629900720829,0.961825643172819],"11":[-0.44573835577653825,0.8951632913550623],"12":[-0.6026346363792563,0.7980172272802396],"13":[-0.739008917220659,0.6736956436465573],"14":[-0.8502171357296142,0.5264321628773557],"15":[-0.9324722294043558,0.36124166618715287],"16":[-0.9829730996839018,0.18374951781657037],"17":[-1.0,1.2246467991473532e-16],"18":[-0.9829730996839018,-0.18374951781657015],"19":[-0.9324722294043557,-0.3612416661871531],"2":[0.9324722294043558,0.3612416661871529],"20":[-0.8502171357296141,-0.5264321628773558],"21":[-0.7390089172206591,-0.6736956436465572],"22":[-0.6026346363792565,-0.7980172272802394],"23":[-0.44573835577653803,-0.8951632913550625],"24":[-0.2736629900720831,-0.961825643172819],"25":[-0.0922683594633019,-0.9957341762950346],"26":[0.09226835946330156,-0.9957341762950346],"27":[0.2736629900720828,-0.961825643172819],"28":[0.44573835577653853,-0.8951632913550622],"29":[0.6026346363792562,-0.7980172272802397],"3":[0.8502171357296142,0.5264321628773557],"30":[0.7390089172206591,-0.6736956436465571],"31":[0.850217135729614,-0.5264321628773562],"32":[0.9324722294043558,-0.361241666187153],"33":[0.9829730996839018,-0.18374951781657006],"4":[0.7390089172206591,0.6736956436465572],"5":[0.6026346363792564,0.7980172272802395],"6":[0.4457383557765383,0.8951632913550623],"7":[0.2736629900720828,0.961825643172819],"8":[0.092268359463302,0.9957341762950345],"9":[-0.09226835946330189,0.9957341762950346]}},"id":"515693d7-6988-4109-b4ca-2833f728ee57","type":"StaticLayoutProvider"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"6ec56143-c432-4ae3-aae2-046c0e3d05d4","type":"Circle"}],"root_ids":["e49d03b6-0bab-4781-bc7b-659b0f4a5cf0"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"ac899c97-d971-4467-98f3-adce4f2dbd0e","elementid":"00b1fba1-6426-450e-b1fa-a2c72cd8f19f","modelid":"e49d03b6-0bab-4781-bc7b-659b0f4a5cf0"}];
                
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
