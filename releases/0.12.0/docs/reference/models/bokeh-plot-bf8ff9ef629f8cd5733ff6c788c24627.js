document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("5277c668-bc8c-4d14-844a-4a64811471c6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5277c668-bc8c-4d14-844a-4a64811471c6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6d2cc047-6ef2-4998-9cc7-2202b74d1aea":{"roots":{"references":[{"attributes":{"data_source":{"id":"f483a258-06cb-4749-b7bd-305b30508684","type":"ColumnDataSource"},"glyph":{"id":"fc99e92a-6118-46bc-a591-c3fd6044e1fa","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"821c5aa9-df35-445b-8523-e3d4174681dc","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"19061a96-bea4-411f-8582-93a086e9b19c","type":"Range1d"},{"attributes":{},"id":"39dd7ebe-6cc7-44dd-8bc5-ab696033cf42","type":"ToolEvents"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"e5923ef8-faa6-42e7-a5d2-4a74fa166bb0","type":"ImageURL"},{"attributes":{},"id":"1adb8df3-8902-446c-afe0-b1819d63b4cd","type":"BasicTickFormatter"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"209fe822-c737-45ed-b25e-cc7d6d785e7b","type":"ImageURL"},{"attributes":{"formatter":{"id":"1adb8df3-8902-446c-afe0-b1819d63b4cd","type":"BasicTickFormatter"},"plot":{"id":"6bd9f435-1334-4fca-8500-d30f9b3b05fe","type":"Plot"},"ticker":{"id":"5039d117-3ea4-46de-8919-18cbf4e82fee","type":"BasicTicker"}},"id":"d490e935-80d0-47af-ade4-f747db2d94ad","type":"LinearAxis"},{"attributes":{"formatter":{"id":"fed78e2d-23c7-4d0e-8a80-3d77642d7f1b","type":"BasicTickFormatter"},"plot":{"id":"6bd9f435-1334-4fca-8500-d30f9b3b05fe","type":"Plot"},"ticker":{"id":"db69b120-1b8f-4541-9ca0-811e1bbe3ff6","type":"BasicTicker"}},"id":"5adff11e-aadd-4206-b879-c32cb20510cf","type":"LinearAxis"},{"attributes":{},"id":"5039d117-3ea4-46de-8919-18cbf4e82fee","type":"BasicTicker"},{"attributes":{},"id":"fed78e2d-23c7-4d0e-8a80-3d77642d7f1b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f483a258-06cb-4749-b7bd-305b30508684","type":"ColumnDataSource"},"glyph":{"id":"209fe822-c737-45ed-b25e-cc7d6d785e7b","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"28407a74-a7c7-4651-94ef-43ac03d91820","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"6bd9f435-1334-4fca-8500-d30f9b3b05fe","type":"Plot"},"ticker":{"id":"5039d117-3ea4-46de-8919-18cbf4e82fee","type":"BasicTicker"}},"id":"3081d59c-d258-4728-a522-19f60c439c98","type":"Grid"},{"attributes":{},"id":"db69b120-1b8f-4541-9ca0-811e1bbe3ff6","type":"BasicTicker"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"fc99e92a-6118-46bc-a591-c3fd6044e1fa","type":"ImageURL"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"434c8756-13b9-4b37-b301-180f2d471a9e","type":"Toolbar"},{"attributes":{"below":[{"id":"5adff11e-aadd-4206-b879-c32cb20510cf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d490e935-80d0-47af-ade4-f747db2d94ad","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"821c5aa9-df35-445b-8523-e3d4174681dc","type":"GlyphRenderer"},{"id":"28407a74-a7c7-4651-94ef-43ac03d91820","type":"GlyphRenderer"},{"id":"0bc7f93b-2931-40dc-94fa-98661f7cb5bb","type":"GlyphRenderer"},{"id":"5adff11e-aadd-4206-b879-c32cb20510cf","type":"LinearAxis"},{"id":"d490e935-80d0-47af-ade4-f747db2d94ad","type":"LinearAxis"},{"id":"255cad01-0aef-4397-9613-120484c5ff4e","type":"Grid"},{"id":"3081d59c-d258-4728-a522-19f60c439c98","type":"Grid"}],"title":null,"tool_events":{"id":"39dd7ebe-6cc7-44dd-8bc5-ab696033cf42","type":"ToolEvents"},"toolbar":{"id":"434c8756-13b9-4b37-b301-180f2d471a9e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19061a96-bea4-411f-8582-93a086e9b19c","type":"Range1d"},"y_range":{"id":"fe156784-d448-433a-ba0c-2fae21a14ff5","type":"Range1d"}},"id":"6bd9f435-1334-4fca-8500-d30f9b3b05fe","type":"Plot"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"fe156784-d448-433a-ba0c-2fae21a14ff5","type":"Range1d"},{"attributes":{"plot":{"id":"6bd9f435-1334-4fca-8500-d30f9b3b05fe","type":"Plot"},"ticker":{"id":"db69b120-1b8f-4541-9ca0-811e1bbe3ff6","type":"BasicTicker"}},"id":"255cad01-0aef-4397-9613-120484c5ff4e","type":"Grid"},{"attributes":{"data_source":{"id":"f483a258-06cb-4749-b7bd-305b30508684","type":"ColumnDataSource"},"glyph":{"id":"e5923ef8-faa6-42e7-a5d2-4a74fa166bb0","type":"ImageURL"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0bc7f93b-2931-40dc-94fa-98661f7cb5bb","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x2","y1","h1","w1","url","x1","y2"],"data":{"h1":[10.0,20.0,30.0,40.0,50.0],"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":[10.0,20.0,30.0,40.0,50.0],"x1":[0.0,37.5,75.0,112.5,150.0],"x2":[-50.0,0.0,50.0,100.0,150.0],"y1":[0.0,37.5,75.0,112.5,150.0],"y2":[0.0,50.0,100.0,150.0,200.0]}},"id":"f483a258-06cb-4749-b7bd-305b30508684","type":"ColumnDataSource"}],"root_ids":["6bd9f435-1334-4fca-8500-d30f9b3b05fe"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6d2cc047-6ef2-4998-9cc7-2202b74d1aea","elementid":"5277c668-bc8c-4d14-844a-4a64811471c6","modelid":"6bd9f435-1334-4fca-8500-d30f9b3b05fe"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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