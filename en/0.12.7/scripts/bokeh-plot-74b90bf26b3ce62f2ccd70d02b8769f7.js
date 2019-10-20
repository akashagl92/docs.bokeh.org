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
      };var element = document.getElementById("3401ee93-a32e-4321-ad44-8b141a220b18");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3401ee93-a32e-4321-ad44-8b141a220b18' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"09aa9eaf-1998-47d4-b900-a4a2b9682434":{"roots":{"references":[{"attributes":{},"id":"6c4b3a15-f02d-4c64-9cd1-b2aed489face","type":"EdgesAndLinkedNodes"},{"attributes":{"callback":null,"overlay":{"id":"0eb77c94-4494-4b1f-a609-79755c8a76ca","type":"BoxAnnotation"}},"id":"4971695d-6a78-4eb8-971b-4b3ea0799c80","type":"BoxSelectTool"},{"attributes":{"source":{"id":"fa0b8f61-85d0-4dce-8955-d987d9b258d8","type":"ColumnDataSource"}},"id":"5a1b2d37-0ae6-4705-80c3-02c9dcc0217c","type":"CDSView"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"8fc53af8-0900-4d3a-a536-bc88b503507f","type":"Range1d"},{"attributes":{"data_source":{"id":"fa0b8f61-85d0-4dce-8955-d987d9b258d8","type":"ColumnDataSource"},"glyph":{"id":"161acec0-ebee-4341-b6d4-f83a022cc471","type":"Circle"},"hover_glyph":{"id":"20a60a68-f787-466c-8a3b-ae6e8dce9028","type":"Circle"},"muted_glyph":null,"selection_glyph":{"id":"d87d8149-7ba7-4a1f-891b-a09dfd7dbce4","type":"Circle"},"view":{"id":"5a1b2d37-0ae6-4705-80c3-02c9dcc0217c","type":"CDSView"}},"id":"dc495672-d0d6-4ab6-bdc8-952fe715122b","type":"GlyphRenderer"},{"attributes":{},"id":"4dd713f9-4e60-4635-80c3-ef59c4409622","type":"LinearScale"},{"attributes":{"line_color":{"value":"#fdae61"},"line_width":{"value":5}},"id":"35d75f42-c25e-4612-a7b1-aeef6502215d","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bc918a21-9e9a-4bbd-9c5d-d802da5a7065","type":"HoverTool"},{"id":"ebd18d5a-a50e-447b-9184-2f64721a4ef0","type":"TapTool"},{"id":"4971695d-6a78-4eb8-971b-4b3ea0799c80","type":"BoxSelectTool"}]},"id":"9b23e5b6-48ac-469a-8e44-cd5e4342c68c","type":"Toolbar"},{"attributes":{"data_source":{"id":"0976ba10-6d98-45d6-bade-424ed3ed9909","type":"ColumnDataSource"},"glyph":{"id":"0b4a893f-943c-4234-b787-70479161cf12","type":"MultiLine"},"hover_glyph":{"id":"69408a1e-9944-4cdb-b18f-ed2643216507","type":"MultiLine"},"muted_glyph":null,"selection_glyph":{"id":"35d75f42-c25e-4612-a7b1-aeef6502215d","type":"MultiLine"},"view":{"id":"44497613-fd28-44ba-9817-2ec1dcf66234","type":"CDSView"}},"id":"c02ed7ee-c236-497c-9801-bb7ff6600d76","type":"GlyphRenderer"},{"attributes":{},"id":"d5a4bf85-2e78-4b6f-916e-8188140b5cae","type":"LinearScale"},{"attributes":{"source":{"id":"0976ba10-6d98-45d6-bade-424ed3ed9909","type":"ColumnDataSource"}},"id":"44497613-fd28-44ba-9817-2ec1dcf66234","type":"CDSView"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.9829730996839018,0.18374951781657034],"10":[-0.2736629900720829,0.961825643172819],"11":[-0.4457383557765382,0.8951632913550623],"12":[-0.6026346363792563,0.7980172272802396],"13":[-0.739008917220659,0.6736956436465574],"14":[-0.8502171357296142,0.5264321628773557],"15":[-0.9324722294043558,0.3612416661871529],"16":[-0.9829730996839018,0.18374951781657037],"17":[-1.0,1.2246467991473532e-16],"18":[-0.9829730996839018,-0.18374951781657012],"19":[-0.9324722294043557,-0.3612416661871531],"2":[0.9324722294043558,0.3612416661871529],"20":[-0.8502171357296141,-0.5264321628773558],"21":[-0.7390089172206591,-0.6736956436465572],"22":[-0.6026346363792565,-0.7980172272802395],"23":[-0.44573835577653803,-0.8951632913550625],"24":[-0.2736629900720831,-0.961825643172819],"25":[-0.09226835946330192,-0.9957341762950346],"26":[0.09226835946330154,-0.9957341762950346],"27":[0.2736629900720828,-0.961825643172819],"28":[0.44573835577653853,-0.8951632913550622],"29":[0.6026346363792562,-0.7980172272802397],"3":[0.8502171357296142,0.5264321628773557],"30":[0.7390089172206592,-0.6736956436465571],"31":[0.8502171357296139,-0.5264321628773562],"32":[0.9324722294043558,-0.36124166618715303],"33":[0.9829730996839018,-0.18374951781657006],"4":[0.7390089172206591,0.6736956436465572],"5":[0.6026346363792564,0.7980172272802395],"6":[0.4457383557765383,0.8951632913550623],"7":[0.2736629900720828,0.961825643172819],"8":[0.09226835946330202,0.9957341762950345],"9":[-0.09226835946330189,0.9957341762950346]}},"id":"0e33e16c-afb6-4d81-b619-45061f68433f","type":"StaticLayoutProvider"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"161acec0-ebee-4341-b6d4-f83a022cc471","type":"Circle"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"0eb77c94-4494-4b1f-a609-79755c8a76ca","type":"BoxAnnotation"},{"id":"238f4bca-0054-42bf-9be7-2257c31d3d85","type":"GraphRenderer"}],"title":{"id":"df07ad08-b5ea-4723-b25d-9f5804dfdd2f","type":"Title"},"toolbar":{"id":"9b23e5b6-48ac-469a-8e44-cd5e4342c68c","type":"Toolbar"},"x_range":{"id":"8fc53af8-0900-4d3a-a536-bc88b503507f","type":"Range1d"},"x_scale":{"id":"d5a4bf85-2e78-4b6f-916e-8188140b5cae","type":"LinearScale"},"y_range":{"id":"c902540a-c2a1-46b7-bc02-3ada894903dd","type":"Range1d"},"y_scale":{"id":"4dd713f9-4e60-4635-80c3-ef59c4409622","type":"LinearScale"}},"id":"4652b627-b4b5-450f-bc62-9ad9989212b1","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0eb77c94-4494-4b1f-a609-79755c8a76ca","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"c902540a-c2a1-46b7-bc02-3ada894903dd","type":"Range1d"},{"attributes":{"fill_color":{"value":"#fdae61"},"size":{"units":"screen","value":15}},"id":"d87d8149-7ba7-4a1f-891b-a09dfd7dbce4","type":"Circle"},{"attributes":{"line_color":{"value":"#abdda4"},"line_width":{"value":5}},"id":"69408a1e-9944-4cdb-b18f-ed2643216507","type":"MultiLine"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"0976ba10-6d98-45d6-bade-424ed3ed9909","type":"ColumnDataSource"},{"attributes":{},"id":"43b3a904-6523-4a94-ad43-19c068fe313a","type":"NodesAndLinkedEdges"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"df07ad08-b5ea-4723-b25d-9f5804dfdd2f","type":"Title"},{"attributes":{"callback":null},"id":"ebd18d5a-a50e-447b-9184-2f64721a4ef0","type":"TapTool"},{"attributes":{"fill_color":{"value":"#abdda4"},"size":{"units":"screen","value":15}},"id":"20a60a68-f787-466c-8a3b-ae6e8dce9028","type":"Circle"},{"attributes":{"callback":null,"tooltips":null},"id":"bc918a21-9e9a-4bbd-9c5d-d802da5a7065","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"fa0b8f61-85d0-4dce-8955-d987d9b258d8","type":"ColumnDataSource"},{"attributes":{"edge_renderer":{"id":"c02ed7ee-c236-497c-9801-bb7ff6600d76","type":"GlyphRenderer"},"inspection_policy":{"id":"6c4b3a15-f02d-4c64-9cd1-b2aed489face","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"0e33e16c-afb6-4d81-b619-45061f68433f","type":"StaticLayoutProvider"},"node_renderer":{"id":"dc495672-d0d6-4ab6-bdc8-952fe715122b","type":"GlyphRenderer"},"selection_policy":{"id":"43b3a904-6523-4a94-ad43-19c068fe313a","type":"NodesAndLinkedEdges"}},"id":"238f4bca-0054-42bf-9be7-2257c31d3d85","type":"GraphRenderer"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#CCCCCC"},"line_width":{"value":5}},"id":"0b4a893f-943c-4234-b787-70479161cf12","type":"MultiLine"}],"root_ids":["4652b627-b4b5-450f-bc62-9ad9989212b1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"09aa9eaf-1998-47d4-b900-a4a2b9682434","elementid":"3401ee93-a32e-4321-ad44-8b141a220b18","modelid":"4652b627-b4b5-450f-bc62-9ad9989212b1"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
