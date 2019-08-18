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
      };var element = document.getElementById("c5acd7a4-4931-4400-bffb-0305b142c3d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5acd7a4-4931-4400-bffb-0305b142c3d1' but no matching script tag was found. ")
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
                  var docs_json = {"79ac0294-8ddd-42d7-8135-404ef640db98":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4fab53b4-bcf5-4fe4-97f9-fe72ee87f668","type":"ColumnDataSource"},{"attributes":{},"id":"0f962029-4d10-4f58-a258-2fabc3a71dc0","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9e786e8c-bb38-46e4-97f8-b505f6fdcca6","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"711d92fc-a6bb-4d6b-9775-0a5c638db297","type":"SquareX"},{"attributes":{},"id":"6572e4e6-378a-4638-a07d-0b3f133571eb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"05862e5e-8308-4185-b9d5-8f34c1962928","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"eab4129c-4ee4-4059-ac0b-badedaa4acb2","type":"Plot"},"ticker":{"id":"0f962029-4d10-4f58-a258-2fabc3a71dc0","type":"BasicTicker"}},"id":"4108c651-3982-41b0-9cf0-15f14b8392c6","type":"Grid"},{"attributes":{},"id":"f4da1498-7206-4d97-87ab-d7ff8220f9b7","type":"ToolEvents"},{"attributes":{"plot":{"id":"eab4129c-4ee4-4059-ac0b-badedaa4acb2","type":"Plot"},"ticker":{"id":"6c8e4322-e7b7-46c5-9867-124bd464ff67","type":"BasicTicker"}},"id":"495f7626-4040-47d8-aec7-1fff514fe7be","type":"Grid"},{"attributes":{},"id":"fb452414-fec6-4e8c-861a-0115ea8a5f0b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4fab53b4-bcf5-4fe4-97f9-fe72ee87f668","type":"ColumnDataSource"},"glyph":{"id":"711d92fc-a6bb-4d6b-9775-0a5c638db297","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"116925ee-9f5b-41ef-bf9b-4fe921be419b","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6572e4e6-378a-4638-a07d-0b3f133571eb","type":"BasicTickFormatter"},"plot":{"id":"eab4129c-4ee4-4059-ac0b-badedaa4acb2","type":"Plot"},"ticker":{"id":"0f962029-4d10-4f58-a258-2fabc3a71dc0","type":"BasicTicker"}},"id":"d5084aae-3ccc-4ad4-80ea-ee62b477c8c1","type":"LinearAxis"},{"attributes":{"below":[{"id":"f0a2f951-ff5a-42f1-83d0-cbfe58d98ee6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d5084aae-3ccc-4ad4-80ea-ee62b477c8c1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"116925ee-9f5b-41ef-bf9b-4fe921be419b","type":"GlyphRenderer"},{"id":"f0a2f951-ff5a-42f1-83d0-cbfe58d98ee6","type":"LinearAxis"},{"id":"d5084aae-3ccc-4ad4-80ea-ee62b477c8c1","type":"LinearAxis"},{"id":"495f7626-4040-47d8-aec7-1fff514fe7be","type":"Grid"},{"id":"4108c651-3982-41b0-9cf0-15f14b8392c6","type":"Grid"}],"title":null,"tool_events":{"id":"f4da1498-7206-4d97-87ab-d7ff8220f9b7","type":"ToolEvents"},"toolbar":{"id":"9e786e8c-bb38-46e4-97f8-b505f6fdcca6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"18e79956-c80d-4d11-a697-cc34c1cc0505","type":"DataRange1d"},"y_range":{"id":"05862e5e-8308-4185-b9d5-8f34c1962928","type":"DataRange1d"}},"id":"eab4129c-4ee4-4059-ac0b-badedaa4acb2","type":"Plot"},{"attributes":{},"id":"6c8e4322-e7b7-46c5-9867-124bd464ff67","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fb452414-fec6-4e8c-861a-0115ea8a5f0b","type":"BasicTickFormatter"},"plot":{"id":"eab4129c-4ee4-4059-ac0b-badedaa4acb2","type":"Plot"},"ticker":{"id":"6c8e4322-e7b7-46c5-9867-124bd464ff67","type":"BasicTicker"}},"id":"f0a2f951-ff5a-42f1-83d0-cbfe58d98ee6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"18e79956-c80d-4d11-a697-cc34c1cc0505","type":"DataRange1d"}],"root_ids":["eab4129c-4ee4-4059-ac0b-badedaa4acb2"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"79ac0294-8ddd-42d7-8135-404ef640db98","elementid":"c5acd7a4-4931-4400-bffb-0305b142c3d1","modelid":"eab4129c-4ee4-4059-ac0b-badedaa4acb2"}];
                  
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