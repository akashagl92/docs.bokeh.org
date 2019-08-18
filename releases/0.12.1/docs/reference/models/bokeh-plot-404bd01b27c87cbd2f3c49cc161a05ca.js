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
      };var element = document.getElementById("20255d84-81fa-4404-8764-5a9125fddedf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20255d84-81fa-4404-8764-5a9125fddedf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"2f15ce24-6b86-4cc4-9194-794b674890ba":{"roots":{"references":[{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"3e77f8d4-2561-4eea-a5ec-4852adefdd64","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5ee922c1-ed22-4bcb-810a-c53cb1cb66a7","type":"Toolbar"},{"attributes":{"callback":null},"id":"cc2031fc-b915-4a7f-a24a-021509119230","type":"DataRange1d"},{"attributes":{},"id":"6ee33a21-6170-4899-ad43-e62105333372","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b24fccf6-6cbc-4d38-a356-d28366e769d4","type":"BasicTickFormatter"},"plot":{"id":"3da472b5-2982-4a9b-8cfc-a64059c3549c","type":"Plot"},"ticker":{"id":"29b887a4-dc0f-418a-acaa-a97706aada40","type":"BasicTicker"}},"id":"09ee1c27-e77e-469e-9ea4-f51beb564065","type":"LinearAxis"},{"attributes":{"formatter":{"id":"6ee33a21-6170-4899-ad43-e62105333372","type":"BasicTickFormatter"},"plot":{"id":"3da472b5-2982-4a9b-8cfc-a64059c3549c","type":"Plot"},"ticker":{"id":"91fa308e-670e-48a7-9c2b-61d316d28629","type":"BasicTicker"}},"id":"a2ab93b5-e60f-447b-bdb6-0793527f637b","type":"LinearAxis"},{"attributes":{"below":[{"id":"09ee1c27-e77e-469e-9ea4-f51beb564065","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a2ab93b5-e60f-447b-bdb6-0793527f637b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"98616dee-e808-47e0-ab01-7937ded1af40","type":"GlyphRenderer"},{"id":"09ee1c27-e77e-469e-9ea4-f51beb564065","type":"LinearAxis"},{"id":"a2ab93b5-e60f-447b-bdb6-0793527f637b","type":"LinearAxis"},{"id":"14572823-5ccc-4edb-b1da-8b74d7090f58","type":"Grid"},{"id":"544607e0-4b23-4a17-8ef2-3291f15a2218","type":"Grid"}],"title":null,"tool_events":{"id":"27ff61b8-d4a1-42ea-9650-c07892133bc1","type":"ToolEvents"},"toolbar":{"id":"5ee922c1-ed22-4bcb-810a-c53cb1cb66a7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cc2031fc-b915-4a7f-a24a-021509119230","type":"DataRange1d"},"y_range":{"id":"84021d40-859c-4a97-ba39-51989fb68a32","type":"DataRange1d"}},"id":"3da472b5-2982-4a9b-8cfc-a64059c3549c","type":"Plot"},{"attributes":{"data_source":{"id":"073537ee-0ab9-490d-a215-ae2ba0414bf3","type":"ColumnDataSource"},"glyph":{"id":"3e77f8d4-2561-4eea-a5ec-4852adefdd64","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"98616dee-e808-47e0-ab01-7937ded1af40","type":"GlyphRenderer"},{"attributes":{},"id":"29b887a4-dc0f-418a-acaa-a97706aada40","type":"BasicTicker"},{"attributes":{"callback":null},"id":"84021d40-859c-4a97-ba39-51989fb68a32","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[[-2.09,-2.12,-2.0,-1.88,-1.91],[-1.599,-1.6320000000000001,-1.5,-1.3679999999999999,-1.401],[-1.108,-1.144,-1.0,-0.856,-0.892],[-0.617,-0.656,-0.5,-0.344,-0.383],[-0.126,-0.16799999999999998,0.0,0.16799999999999998,0.126],[0.365,0.32,0.5,0.6799999999999999,0.635],[0.856,0.808,1.0,1.192,1.144],[1.347,1.296,1.5,1.704,1.653],[1.838,1.784,2.0,2.216,2.162]],"ys":[[3.9,4.02,4.1,4.02,3.9],[2.14,2.272,2.36,2.272,2.14],[0.88,1.024,1.12,1.024,0.88],[0.12,0.276,0.38,0.276,0.12],[-0.13999999999999999,0.027999999999999997,0.13999999999999999,0.027999999999999997,-0.13999999999999999],[0.09999999999999998,0.28,0.4,0.28,0.09999999999999998],[0.84,1.032,1.1600000000000001,1.032,0.84],[2.08,2.284,2.42,2.284,2.08],[3.82,4.036,4.18,4.036,3.82]]}},"id":"073537ee-0ab9-490d-a215-ae2ba0414bf3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3da472b5-2982-4a9b-8cfc-a64059c3549c","type":"Plot"},"ticker":{"id":"29b887a4-dc0f-418a-acaa-a97706aada40","type":"BasicTicker"}},"id":"14572823-5ccc-4edb-b1da-8b74d7090f58","type":"Grid"},{"attributes":{},"id":"27ff61b8-d4a1-42ea-9650-c07892133bc1","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"3da472b5-2982-4a9b-8cfc-a64059c3549c","type":"Plot"},"ticker":{"id":"91fa308e-670e-48a7-9c2b-61d316d28629","type":"BasicTicker"}},"id":"544607e0-4b23-4a17-8ef2-3291f15a2218","type":"Grid"},{"attributes":{},"id":"b24fccf6-6cbc-4d38-a356-d28366e769d4","type":"BasicTickFormatter"},{"attributes":{},"id":"91fa308e-670e-48a7-9c2b-61d316d28629","type":"BasicTicker"}],"root_ids":["3da472b5-2982-4a9b-8cfc-a64059c3549c"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2f15ce24-6b86-4cc4-9194-794b674890ba","elementid":"20255d84-81fa-4404-8764-5a9125fddedf","modelid":"3da472b5-2982-4a9b-8cfc-a64059c3549c"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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