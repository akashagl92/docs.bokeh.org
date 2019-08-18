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
      };var element = document.getElementById("2556546e-8ba5-4a4d-9004-c389c4cb24d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2556546e-8ba5-4a4d-9004-c389c4cb24d5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"8953092f-f78a-4c72-b6b4-b74c11f5f93e":{"roots":{"references":[{"attributes":{},"id":"c6a47084-36f5-4eb3-b7c8-134b13bab725","type":"ToolEvents"},{"attributes":{"below":[{"id":"975737ec-e188-4b1a-892f-693edeae74c5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0a92638a-b73e-48ff-8b49-0e13ce252241","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e2846d4d-707f-4721-8a23-fc342afb3b15","type":"GlyphRenderer"},{"id":"975737ec-e188-4b1a-892f-693edeae74c5","type":"LinearAxis"},{"id":"0a92638a-b73e-48ff-8b49-0e13ce252241","type":"LinearAxis"},{"id":"62159f7d-1b23-463e-bf4f-8d3b989b4e25","type":"Grid"},{"id":"481a7acc-de58-4aaf-9dee-3e396bc9dfca","type":"Grid"}],"title":null,"tool_events":{"id":"c6a47084-36f5-4eb3-b7c8-134b13bab725","type":"ToolEvents"},"toolbar":{"id":"8ea89b50-2344-42fb-8b16-d6c8e516adb6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5c0e108c-0bec-447d-b81a-3026226c2265","type":"DataRange1d"},"y_range":{"id":"ea095ecf-0dd8-420e-861e-b41f848a4ff3","type":"DataRange1d"}},"id":"e229c9d5-e5d8-4133-9a22-3373bb273bd1","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"e229c9d5-e5d8-4133-9a22-3373bb273bd1","type":"Plot"},"ticker":{"id":"ae7c77be-bf8e-4a77-9b1a-2abaddf1cddb","type":"BasicTicker"}},"id":"481a7acc-de58-4aaf-9dee-3e396bc9dfca","type":"Grid"},{"attributes":{"callback":null},"id":"5c0e108c-0bec-447d-b81a-3026226c2265","type":"DataRange1d"},{"attributes":{},"id":"1887577c-0391-4acf-82ed-28a220a8543f","type":"BasicTickFormatter"},{"attributes":{},"id":"ae7c77be-bf8e-4a77-9b1a-2abaddf1cddb","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7d4896b8-efb6-4641-b933-84e01e90e3b8","type":"ColumnDataSource"},"glyph":{"id":"e2aab98f-6239-42a7-98f5-b510cc0473d8","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2846d4d-707f-4721-8a23-fc342afb3b15","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e229c9d5-e5d8-4133-9a22-3373bb273bd1","type":"Plot"},"ticker":{"id":"5b88c4aa-31d3-4de8-a9d0-4397499bc811","type":"BasicTicker"}},"id":"62159f7d-1b23-463e-bf4f-8d3b989b4e25","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8ea89b50-2344-42fb-8b16-d6c8e516adb6","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"7d4896b8-efb6-4641-b933-84e01e90e3b8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"80bc585d-39d5-453c-8f61-cb6b1358ea59","type":"BasicTickFormatter"},"plot":{"id":"e229c9d5-e5d8-4133-9a22-3373bb273bd1","type":"Plot"},"ticker":{"id":"ae7c77be-bf8e-4a77-9b1a-2abaddf1cddb","type":"BasicTicker"}},"id":"0a92638a-b73e-48ff-8b49-0e13ce252241","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"e2aab98f-6239-42a7-98f5-b510cc0473d8","type":"Patches"},{"attributes":{},"id":"5b88c4aa-31d3-4de8-a9d0-4397499bc811","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ea095ecf-0dd8-420e-861e-b41f848a4ff3","type":"DataRange1d"},{"attributes":{},"id":"80bc585d-39d5-453c-8f61-cb6b1358ea59","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1887577c-0391-4acf-82ed-28a220a8543f","type":"BasicTickFormatter"},"plot":{"id":"e229c9d5-e5d8-4133-9a22-3373bb273bd1","type":"Plot"},"ticker":{"id":"5b88c4aa-31d3-4de8-a9d0-4397499bc811","type":"BasicTicker"}},"id":"975737ec-e188-4b1a-892f-693edeae74c5","type":"LinearAxis"}],"root_ids":["e229c9d5-e5d8-4133-9a22-3373bb273bd1"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"8953092f-f78a-4c72-b6b4-b74c11f5f93e","elementid":"2556546e-8ba5-4a4d-9004-c389c4cb24d5","modelid":"e229c9d5-e5d8-4133-9a22-3373bb273bd1"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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