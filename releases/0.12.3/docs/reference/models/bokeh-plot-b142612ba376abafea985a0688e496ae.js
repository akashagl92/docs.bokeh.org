document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("8083ee75-0fdd-435e-98d4-f555583bfc56");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8083ee75-0fdd-435e-98d4-f555583bfc56' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"618915d9-71b4-4b7f-b863-c0a42b29a82f":{"roots":{"references":[{"attributes":{"data_source":{"id":"308cba1a-517e-4b20-8b4c-574df2b7a1bb","type":"ColumnDataSource"},"glyph":{"id":"9ce0d497-782d-459c-96c4-dc59dabb37fd","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea8b7db0-3d12-45ba-a921-08d3de85acce","type":"GlyphRenderer"},{"attributes":{},"id":"9022470d-6654-42ab-9bc7-3ed635fef12c","type":"ToolEvents"},{"attributes":{"plot":{"id":"2181f0d2-038f-4a87-b2ea-53ca0d7cecfa","type":"Plot"},"ticker":{"id":"26932434-b613-49e7-8533-43b31d12f7ed","type":"BasicTicker"}},"id":"7e60c1a8-6328-432b-b296-7ee14bdec628","type":"Grid"},{"attributes":{"formatter":{"id":"2ab7f47f-079a-46b3-bf93-f8f00b7a355d","type":"BasicTickFormatter"},"plot":{"id":"2181f0d2-038f-4a87-b2ea-53ca0d7cecfa","type":"Plot"},"ticker":{"id":"26932434-b613-49e7-8533-43b31d12f7ed","type":"BasicTicker"}},"id":"cba60258-9f98-4d03-975b-5f25d027b502","type":"LinearAxis"},{"attributes":{"callback":null},"id":"34a86e50-3f5a-498d-a6e0-5424f6edee82","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"308cba1a-517e-4b20-8b4c-574df2b7a1bb","type":"ColumnDataSource"},{"attributes":{},"id":"26932434-b613-49e7-8533-43b31d12f7ed","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8796a23b-8476-40ed-a515-e0e9210682b9","type":"BasicTickFormatter"},"plot":{"id":"2181f0d2-038f-4a87-b2ea-53ca0d7cecfa","type":"Plot"},"ticker":{"id":"dae4a209-cd13-4ac8-882d-165dc8fe743e","type":"BasicTicker"}},"id":"b160edca-fe44-4142-92b8-4778e6b85d59","type":"LinearAxis"},{"attributes":{"below":[{"id":"cba60258-9f98-4d03-975b-5f25d027b502","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b160edca-fe44-4142-92b8-4778e6b85d59","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ea8b7db0-3d12-45ba-a921-08d3de85acce","type":"GlyphRenderer"},{"id":"cba60258-9f98-4d03-975b-5f25d027b502","type":"LinearAxis"},{"id":"b160edca-fe44-4142-92b8-4778e6b85d59","type":"LinearAxis"},{"id":"7e60c1a8-6328-432b-b296-7ee14bdec628","type":"Grid"},{"id":"c7e06282-5a87-485c-b49f-f86dc98e1f4e","type":"Grid"}],"title":null,"tool_events":{"id":"9022470d-6654-42ab-9bc7-3ed635fef12c","type":"ToolEvents"},"toolbar":{"id":"9d107c32-7008-4c0f-beef-ed48537b9989","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3c9d04e5-8f94-40d9-a990-a3ec78a0eb8a","type":"DataRange1d"},"y_range":{"id":"34a86e50-3f5a-498d-a6e0-5424f6edee82","type":"DataRange1d"}},"id":"2181f0d2-038f-4a87-b2ea-53ca0d7cecfa","type":"Plot"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"9ce0d497-782d-459c-96c4-dc59dabb37fd","type":"Patches"},{"attributes":{"dimension":1,"plot":{"id":"2181f0d2-038f-4a87-b2ea-53ca0d7cecfa","type":"Plot"},"ticker":{"id":"dae4a209-cd13-4ac8-882d-165dc8fe743e","type":"BasicTicker"}},"id":"c7e06282-5a87-485c-b49f-f86dc98e1f4e","type":"Grid"},{"attributes":{},"id":"2ab7f47f-079a-46b3-bf93-f8f00b7a355d","type":"BasicTickFormatter"},{"attributes":{},"id":"8796a23b-8476-40ed-a515-e0e9210682b9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9d107c32-7008-4c0f-beef-ed48537b9989","type":"Toolbar"},{"attributes":{"callback":null},"id":"3c9d04e5-8f94-40d9-a990-a3ec78a0eb8a","type":"DataRange1d"},{"attributes":{},"id":"dae4a209-cd13-4ac8-882d-165dc8fe743e","type":"BasicTicker"}],"root_ids":["2181f0d2-038f-4a87-b2ea-53ca0d7cecfa"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"618915d9-71b4-4b7f-b863-c0a42b29a82f","elementid":"8083ee75-0fdd-435e-98d4-f555583bfc56","modelid":"2181f0d2-038f-4a87-b2ea-53ca0d7cecfa"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});