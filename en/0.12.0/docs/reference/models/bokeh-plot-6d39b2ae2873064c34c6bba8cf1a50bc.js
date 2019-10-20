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
      };var element = document.getElementById("bdbb623f-5f92-46cd-a619-cd08ba272c6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bdbb623f-5f92-46cd-a619-cd08ba272c6c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c5189ecd-197c-4f2b-92a6-82988b8d7e54":{"roots":{"references":[{"attributes":{},"id":"0356cbd9-41b2-46fd-bff6-9e2db89594b4","type":"BasicTicker"},{"attributes":{"below":[{"id":"4a4f2e07-933a-4560-89b3-6bd1ab7620af","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e97e7d10-2748-460b-9010-71e63866365c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10e1a07f-910c-49a4-9945-0a8488201085","type":"GlyphRenderer"},{"id":"4a4f2e07-933a-4560-89b3-6bd1ab7620af","type":"LinearAxis"},{"id":"e97e7d10-2748-460b-9010-71e63866365c","type":"LinearAxis"},{"id":"dcc9a493-9cd4-460b-9cd2-8d1cc2e22896","type":"Grid"},{"id":"819c348f-ff2a-4a6e-bb1e-71ff64abad15","type":"Grid"}],"title":null,"tool_events":{"id":"15838a7e-127e-490c-9323-2898f97bf799","type":"ToolEvents"},"toolbar":{"id":"83fb3b6d-90a9-4c73-b2bb-52f8c310d3fc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f81270fa-3b60-4afa-af5c-21cab444432f","type":"DataRange1d"},"y_range":{"id":"ed4bc0f1-dd8c-4527-986d-6e66c8523c00","type":"DataRange1d"}},"id":"a433cd91-b49b-4469-8768-bb2494a936b2","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"30d682ff-37d3-4e68-a040-5a70a63c7a5b","type":"AnnularWedge"},{"attributes":{"formatter":{"id":"c91cafde-961c-4799-980e-e4b996d5d670","type":"BasicTickFormatter"},"plot":{"id":"a433cd91-b49b-4469-8768-bb2494a936b2","type":"Plot"},"ticker":{"id":"7c1d94e5-dcef-4545-af99-b6a3bde37051","type":"BasicTicker"}},"id":"4a4f2e07-933a-4560-89b3-6bd1ab7620af","type":"LinearAxis"},{"attributes":{},"id":"60f20bf0-f5fb-4e4b-8ee7-1e82864a48fd","type":"BasicTickFormatter"},{"attributes":{},"id":"c91cafde-961c-4799-980e-e4b996d5d670","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"69bfa261-b24b-4f82-b88c-0b3dd29d49ac","type":"ColumnDataSource"},"glyph":{"id":"30d682ff-37d3-4e68-a040-5a70a63c7a5b","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"10e1a07f-910c-49a4-9945-0a8488201085","type":"GlyphRenderer"},{"attributes":{},"id":"7c1d94e5-dcef-4545-af99-b6a3bde37051","type":"BasicTicker"},{"attributes":{"plot":{"id":"a433cd91-b49b-4469-8768-bb2494a936b2","type":"Plot"},"ticker":{"id":"7c1d94e5-dcef-4545-af99-b6a3bde37051","type":"BasicTicker"}},"id":"dcc9a493-9cd4-460b-9cd2-8d1cc2e22896","type":"Grid"},{"attributes":{"callback":null},"id":"ed4bc0f1-dd8c-4527-986d-6e66c8523c00","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"a433cd91-b49b-4469-8768-bb2494a936b2","type":"Plot"},"ticker":{"id":"0356cbd9-41b2-46fd-bff6-9e2db89594b4","type":"BasicTicker"}},"id":"819c348f-ff2a-4a6e-bb1e-71ff64abad15","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.23333333333333336,0.275,0.3166666666666667,0.35833333333333334,0.4,0.4416666666666667,0.48333333333333334,0.525,0.5666666666666667],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"69bfa261-b24b-4f82-b88c-0b3dd29d49ac","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"60f20bf0-f5fb-4e4b-8ee7-1e82864a48fd","type":"BasicTickFormatter"},"plot":{"id":"a433cd91-b49b-4469-8768-bb2494a936b2","type":"Plot"},"ticker":{"id":"0356cbd9-41b2-46fd-bff6-9e2db89594b4","type":"BasicTicker"}},"id":"e97e7d10-2748-460b-9010-71e63866365c","type":"LinearAxis"},{"attributes":{},"id":"15838a7e-127e-490c-9323-2898f97bf799","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"83fb3b6d-90a9-4c73-b2bb-52f8c310d3fc","type":"Toolbar"},{"attributes":{"callback":null},"id":"f81270fa-3b60-4afa-af5c-21cab444432f","type":"DataRange1d"}],"root_ids":["a433cd91-b49b-4469-8768-bb2494a936b2"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c5189ecd-197c-4f2b-92a6-82988b8d7e54","elementid":"bdbb623f-5f92-46cd-a619-cd08ba272c6c","modelid":"a433cd91-b49b-4469-8768-bb2494a936b2"}];
              
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