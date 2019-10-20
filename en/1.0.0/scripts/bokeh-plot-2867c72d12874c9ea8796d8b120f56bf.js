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
      };var element = document.getElementById("e9117cdf-59a6-41bd-8476-2f0f6c25ab97");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e9117cdf-59a6-41bd-8476-2f0f6c25ab97' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"6095a530-558d-4df0-8e1a-39ec5c49efad":{"roots":{"references":[{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25436","type":"LinearAxis"}],"left":[{"id":"25437","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25436","type":"LinearAxis"},{"id":"25437","type":"LinearAxis"},{"id":"25439","type":"Grid"},{"id":"25441","type":"Grid"},{"id":"25443","type":"GlyphRenderer"},{"id":"25446","type":"GlyphRenderer"}],"title":{"id":"25435","type":"Title"},"toolbar":{"id":"25488","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25382","type":"Range1d"},"x_scale":{"id":"25490","type":"LinearScale"},"y_range":{"id":"25383","type":"Range1d"},"y_scale":{"id":"25489","type":"LinearScale"}},"id":"25432","type":"Plot"},{"attributes":{},"id":"25489","type":"LinearScale"},{"attributes":{},"id":"25392","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"25384","type":"Plot"},"ticker":{"id":"25392","type":"BasicTicker"}},"id":"25393","type":"Grid"},{"attributes":{},"id":"25490","type":"LinearScale"},{"attributes":{"plot":null,"text":"IV"},"id":"25435","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25493","type":"BasicTickFormatter"},"plot":{"id":"25432","type":"Plot"},"ticker":{"id":"25438","type":"BasicTicker"}},"id":"25436","type":"LinearAxis"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25394","type":"Line"},{"attributes":{},"id":"25493","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25394","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25396","type":"CDSView"}},"id":"25395","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25495","type":"BasicTickFormatter"},"plot":{"id":"25432","type":"Plot"},"ticker":{"id":"25440","type":"BasicTicker"}},"id":"25437","type":"LinearAxis"},{"attributes":{},"id":"25495","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25396","type":"CDSView"},{"attributes":{},"id":"25438","type":"BasicTicker"},{"attributes":{"sizing_mode":"scale_width","text":"\\n&lt;h1&gt;Anscombe&#x27;s Quartet&lt;/h1&gt;\\n&lt;p&gt;Anscombe&#x27;s quartet is a collection of four small datasets that have nearly\\nidentical simple descriptive statistics (mean, variance, correlation, and linear\\nregression lines), yet appear very different when graphed.\\n&lt;/p&gt;\\n"},"id":"25503","type":"Div"},{"attributes":{"plot":{"id":"25432","type":"Plot"},"ticker":{"id":"25438","type":"BasicTicker"}},"id":"25439","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"25397","type":"Circle"},{"attributes":{"children":[{"id":"25504","type":"WidgetBox"},{"id":"25502","type":"Column"}],"sizing_mode":"scale_width"},"id":"25505","type":"Column"},{"attributes":{"data_source":{"id":"25380","type":"ColumnDataSource"},"glyph":{"id":"25397","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25399","type":"CDSView"}},"id":"25398","type":"GlyphRenderer"},{"attributes":{},"id":"25440","type":"BasicTicker"},{"attributes":{"children":[{"id":"25503","type":"Div"}],"sizing_mode":"scale_width"},"id":"25504","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"25432","type":"Plot"},"ticker":{"id":"25440","type":"BasicTicker"}},"id":"25441","type":"Grid"},{"attributes":{"source":{"id":"25380","type":"ColumnDataSource"}},"id":"25399","type":"CDSView"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25442","type":"Line"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25404","type":"LinearAxis"}],"left":[{"id":"25405","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25404","type":"LinearAxis"},{"id":"25405","type":"LinearAxis"},{"id":"25407","type":"Grid"},{"id":"25409","type":"Grid"},{"id":"25411","type":"GlyphRenderer"},{"id":"25414","type":"GlyphRenderer"}],"title":{"id":"25403","type":"Title"},"toolbar":{"id":"25461","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25382","type":"Range1d"},"x_scale":{"id":"25463","type":"LinearScale"},"y_range":{"id":"25383","type":"Range1d"},"y_scale":{"id":"25462","type":"LinearScale"}},"id":"25400","type":"Plot"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25442","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25444","type":"CDSView"}},"id":"25443","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"II"},"id":"25403","type":"Title"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25444","type":"CDSView"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25466","type":"BasicTickFormatter"},"plot":{"id":"25400","type":"Plot"},"ticker":{"id":"25406","type":"BasicTicker"}},"id":"25404","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25468","type":"BasicTickFormatter"},"plot":{"id":"25400","type":"Plot"},"ticker":{"id":"25408","type":"BasicTicker"}},"id":"25405","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"25445","type":"Circle"},{"attributes":{"data_source":{"id":"25380","type":"ColumnDataSource"},"glyph":{"id":"25445","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25447","type":"CDSView"}},"id":"25446","type":"GlyphRenderer"},{"attributes":{},"id":"25406","type":"BasicTicker"},{"attributes":{"source":{"id":"25380","type":"ColumnDataSource"}},"id":"25447","type":"CDSView"},{"attributes":{"plot":{"id":"25400","type":"Plot"},"ticker":{"id":"25406","type":"BasicTicker"}},"id":"25407","type":"Grid"},{"attributes":{"children":[{"id":"25474","type":"Row"},{"id":"25501","type":"Row"}],"sizing_mode":"scale_width"},"id":"25502","type":"Column"},{"attributes":{"children":[{"id":"25384","type":"Plot"},{"id":"25400","type":"Plot"}]},"id":"25474","type":"Row"},{"attributes":{},"id":"25408","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25448","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"25400","type":"Plot"},"ticker":{"id":"25408","type":"BasicTicker"}},"id":"25409","type":"Grid"},{"attributes":{},"id":"25449","type":"LinearScale"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25410","type":"Line"},{"attributes":{},"id":"25450","type":"LinearScale"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25410","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25412","type":"CDSView"}},"id":"25411","type":"GlyphRenderer"},{"attributes":{},"id":"25453","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":{"id":"25458","type":"Selection"},"selection_policy":{"id":"25459","type":"UnionRenderers"}},"id":"25380","type":"ColumnDataSource"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25412","type":"CDSView"},{"attributes":{},"id":"25455","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":{"id":"25456","type":"Selection"},"selection_policy":{"id":"25457","type":"UnionRenderers"}},"id":"25381","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"25382","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"25413","type":"Circle"},{"attributes":{},"id":"25456","type":"Selection"},{"attributes":{"data_source":{"id":"25380","type":"ColumnDataSource"},"glyph":{"id":"25413","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25415","type":"CDSView"}},"id":"25414","type":"GlyphRenderer"},{"attributes":{},"id":"25457","type":"UnionRenderers"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"25383","type":"Range1d"},{"attributes":{"source":{"id":"25380","type":"ColumnDataSource"}},"id":"25415","type":"CDSView"},{"attributes":{},"id":"25458","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25420","type":"LinearAxis"}],"left":[{"id":"25421","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25420","type":"LinearAxis"},{"id":"25421","type":"LinearAxis"},{"id":"25423","type":"Grid"},{"id":"25425","type":"Grid"},{"id":"25427","type":"GlyphRenderer"},{"id":"25430","type":"GlyphRenderer"}],"title":{"id":"25419","type":"Title"},"toolbar":{"id":"25475","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25382","type":"Range1d"},"x_scale":{"id":"25477","type":"LinearScale"},"y_range":{"id":"25383","type":"Range1d"},"y_scale":{"id":"25476","type":"LinearScale"}},"id":"25416","type":"Plot"},{"attributes":{},"id":"25459","type":"UnionRenderers"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"25388","type":"LinearAxis"}],"left":[{"id":"25389","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25388","type":"LinearAxis"},{"id":"25389","type":"LinearAxis"},{"id":"25391","type":"Grid"},{"id":"25393","type":"Grid"},{"id":"25395","type":"GlyphRenderer"},{"id":"25398","type":"GlyphRenderer"}],"title":{"id":"25387","type":"Title"},"toolbar":{"id":"25448","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"25382","type":"Range1d"},"x_scale":{"id":"25450","type":"LinearScale"},"y_range":{"id":"25383","type":"Range1d"},"y_scale":{"id":"25449","type":"LinearScale"}},"id":"25384","type":"Plot"},{"attributes":{"plot":null,"text":"III"},"id":"25419","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25461","type":"Toolbar"},{"attributes":{"plot":null,"text":"I"},"id":"25387","type":"Title"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25480","type":"BasicTickFormatter"},"plot":{"id":"25416","type":"Plot"},"ticker":{"id":"25422","type":"BasicTicker"}},"id":"25420","type":"LinearAxis"},{"attributes":{},"id":"25462","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25453","type":"BasicTickFormatter"},"plot":{"id":"25384","type":"Plot"},"ticker":{"id":"25390","type":"BasicTicker"}},"id":"25388","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25482","type":"BasicTickFormatter"},"plot":{"id":"25416","type":"Plot"},"ticker":{"id":"25424","type":"BasicTicker"}},"id":"25421","type":"LinearAxis"},{"attributes":{},"id":"25463","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"25455","type":"BasicTickFormatter"},"plot":{"id":"25384","type":"Plot"},"ticker":{"id":"25392","type":"BasicTicker"}},"id":"25389","type":"LinearAxis"},{"attributes":{},"id":"25422","type":"BasicTicker"},{"attributes":{},"id":"25466","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"25416","type":"Plot"},"ticker":{"id":"25422","type":"BasicTicker"}},"id":"25423","type":"Grid"},{"attributes":{},"id":"25390","type":"BasicTicker"},{"attributes":{},"id":"25468","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"25384","type":"Plot"},"ticker":{"id":"25390","type":"BasicTicker"}},"id":"25391","type":"Grid"},{"attributes":{},"id":"25424","type":"BasicTicker"},{"attributes":{"children":[{"id":"25416","type":"Plot"},{"id":"25432","type":"Plot"}]},"id":"25501","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"25416","type":"Plot"},"ticker":{"id":"25424","type":"BasicTicker"}},"id":"25425","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25475","type":"Toolbar"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"25426","type":"Line"},{"attributes":{},"id":"25476","type":"LinearScale"},{"attributes":{"data_source":{"id":"25381","type":"ColumnDataSource"},"glyph":{"id":"25426","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25428","type":"CDSView"}},"id":"25427","type":"GlyphRenderer"},{"attributes":{},"id":"25477","type":"LinearScale"},{"attributes":{"source":{"id":"25381","type":"ColumnDataSource"}},"id":"25428","type":"CDSView"},{"attributes":{},"id":"25480","type":"BasicTickFormatter"},{"attributes":{},"id":"25482","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"25429","type":"Circle"},{"attributes":{"data_source":{"id":"25380","type":"ColumnDataSource"},"glyph":{"id":"25429","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"25431","type":"CDSView"}},"id":"25430","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"25488","type":"Toolbar"},{"attributes":{"source":{"id":"25380","type":"ColumnDataSource"}},"id":"25431","type":"CDSView"}],"root_ids":["25505"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"6095a530-558d-4df0-8e1a-39ec5c49efad","roots":{"25505":"e9117cdf-59a6-41bd-8476-2f0f6c25ab97"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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