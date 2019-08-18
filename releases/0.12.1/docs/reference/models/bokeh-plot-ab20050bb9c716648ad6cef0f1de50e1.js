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
      };var element = document.getElementById("c126e29c-be83-48cb-a14d-6ce708c79f77");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c126e29c-be83-48cb-a14d-6ce708c79f77' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"57f42173-7e02-406c-b448-1d12d768f56d":{"roots":{"references":[{"attributes":{},"id":"0507c0f9-837f-4856-8846-e9e700dd8b14","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"04dde09d-3705-4bde-8cb7-bdb336ad5d03","type":"Plot"},"ticker":{"id":"16c854ec-2a5f-4b5d-9d24-5ef77b71f56f","type":"BasicTicker"}},"id":"2d6c1738-c7f2-4caa-9fff-9ba52c59dc2a","type":"Grid"},{"attributes":{"formatter":{"id":"0507c0f9-837f-4856-8846-e9e700dd8b14","type":"BasicTickFormatter"},"plot":{"id":"04dde09d-3705-4bde-8cb7-bdb336ad5d03","type":"Plot"},"ticker":{"id":"16c854ec-2a5f-4b5d-9d24-5ef77b71f56f","type":"BasicTicker"}},"id":"401d3009-f24b-4842-acb7-f4af3fb0875f","type":"LinearAxis"},{"attributes":{},"id":"57e8afb3-5ae0-4fc4-9162-bffc9af039be","type":"ToolEvents"},{"attributes":{},"id":"e5c958c0-3823-4fa3-9393-2929af011db3","type":"BasicTicker"},{"attributes":{"below":[{"id":"e8fc3491-5af0-471e-80e9-51a3e57f11a4","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"401d3009-f24b-4842-acb7-f4af3fb0875f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4bafdfae-7d5f-4b42-94e1-51f0f56b31d7","type":"GlyphRenderer"},{"id":"e8fc3491-5af0-471e-80e9-51a3e57f11a4","type":"LinearAxis"},{"id":"401d3009-f24b-4842-acb7-f4af3fb0875f","type":"LinearAxis"},{"id":"61f988b7-3a8f-4786-bed7-ac3ba55c66d2","type":"Grid"},{"id":"2d6c1738-c7f2-4caa-9fff-9ba52c59dc2a","type":"Grid"}],"title":null,"tool_events":{"id":"57e8afb3-5ae0-4fc4-9162-bffc9af039be","type":"ToolEvents"},"toolbar":{"id":"02f0c4a0-0798-4b8a-8e02-54730cb2fd0d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df55a7d8-446d-482d-a32b-f6f02e165e7d","type":"DataRange1d"},"y_range":{"id":"4474c76c-8082-4d79-ab9f-008f5a42f42c","type":"DataRange1d"}},"id":"04dde09d-3705-4bde-8cb7-bdb336ad5d03","type":"Plot"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"7906132f-3f7b-4a62-b870-6ebc07e76f3c","type":"VBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"02f0c4a0-0798-4b8a-8e02-54730cb2fd0d","type":"Toolbar"},{"attributes":{},"id":"16c854ec-2a5f-4b5d-9d24-5ef77b71f56f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0]}},"id":"921ccb44-59e4-4121-978f-28d7b464b578","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"df55a7d8-446d-482d-a32b-f6f02e165e7d","type":"DataRange1d"},{"attributes":{},"id":"d72c0b44-55f4-41ca-8744-7040c070e77e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d72c0b44-55f4-41ca-8744-7040c070e77e","type":"BasicTickFormatter"},"plot":{"id":"04dde09d-3705-4bde-8cb7-bdb336ad5d03","type":"Plot"},"ticker":{"id":"e5c958c0-3823-4fa3-9393-2929af011db3","type":"BasicTicker"}},"id":"e8fc3491-5af0-471e-80e9-51a3e57f11a4","type":"LinearAxis"},{"attributes":{"plot":{"id":"04dde09d-3705-4bde-8cb7-bdb336ad5d03","type":"Plot"},"ticker":{"id":"e5c958c0-3823-4fa3-9393-2929af011db3","type":"BasicTicker"}},"id":"61f988b7-3a8f-4786-bed7-ac3ba55c66d2","type":"Grid"},{"attributes":{"data_source":{"id":"921ccb44-59e4-4121-978f-28d7b464b578","type":"ColumnDataSource"},"glyph":{"id":"7906132f-3f7b-4a62-b870-6ebc07e76f3c","type":"VBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4bafdfae-7d5f-4b42-94e1-51f0f56b31d7","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4474c76c-8082-4d79-ab9f-008f5a42f42c","type":"DataRange1d"}],"root_ids":["04dde09d-3705-4bde-8cb7-bdb336ad5d03"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"57f42173-7e02-406c-b448-1d12d768f56d","elementid":"c126e29c-be83-48cb-a14d-6ce708c79f77","modelid":"04dde09d-3705-4bde-8cb7-bdb336ad5d03"}];
              
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