(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("dce024e0-b12f-4601-b026-c676a5551331");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'dce024e0-b12f-4601-b026-c676a5551331' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"97320234-bfd7-4bff-a07e-af2af3ea10a4":{"roots":{"references":[{"attributes":{"children":[{"id":"1123","type":"Div"},{"id":"1122","type":"GridBox"}],"sizing_mode":"scale_width"},"id":"1124","type":"Column"},{"attributes":{"source":{"id":"1003","type":"ColumnDataSource"}},"id":"1066","type":"CDSView"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1016","type":"Line"},{"attributes":{},"id":"1090","type":"BasicTickFormatter"},{"attributes":{},"id":"1060","type":"BasicTicker"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"1005","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"1067","type":"Circle"},{"attributes":{"data_source":{"id":"1003","type":"ColumnDataSource"},"glyph":{"id":"1064","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1066","type":"CDSView"}},"id":"1065","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1116","type":"BasicTickFormatter"},"ticker":{"id":"1062","type":"BasicTicker"}},"id":"1059","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"1014","type":"BasicTicker"}},"id":"1015","type":"Grid"},{"attributes":{},"id":"1110","type":"LinearScale"},{"attributes":{"sizing_mode":"scale_width","text":"\\n&lt;h1&gt;Anscombe&#x27;s Quartet&lt;/h1&gt;\\n&lt;p&gt;Anscombe&#x27;s quartet is a collection of four small datasets that have nearly\\nidentical simple descriptive statistics (mean, variance, correlation, and linear\\nregression lines), yet appear very different when graphed.\\n&lt;/p&gt;\\n"},"id":"1123","type":"Div"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1075","type":"BasicTickFormatter"},"ticker":{"id":"1012","type":"BasicTicker"}},"id":"1010","type":"LinearAxis"},{"attributes":{},"id":"1084","type":"LinearScale"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{},"id":"1014","type":"BasicTicker"},{"attributes":{"ticker":{"id":"1012","type":"BasicTicker"}},"id":"1013","type":"Grid"},{"attributes":{"text":"I"},"id":"1009","type":"Title"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"1010","type":"LinearAxis"}],"center":[{"id":"1013","type":"Grid"},{"id":"1015","type":"Grid"}],"left":[{"id":"1011","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1017","type":"GlyphRenderer"},{"id":"1020","type":"GlyphRenderer"}],"title":{"id":"1009","type":"Title"},"toolbar":{"id":"1070","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1004","type":"Range1d"},"x_scale":{"id":"1071","type":"LinearScale"},"y_range":{"id":"1005","type":"Range1d"},"y_scale":{"id":"1073","type":"LinearScale"}},"id":"1006","type":"Plot"},{"attributes":{"data_source":{"id":"1003","type":"ColumnDataSource"},"glyph":{"id":"1016","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1018","type":"CDSView"}},"id":"1017","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"1062","type":"BasicTicker"}},"id":"1063","type":"Grid"},{"attributes":{},"id":"1062","type":"BasicTicker"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"1004","type":"Range1d"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1114","type":"BasicTickFormatter"},"ticker":{"id":"1060","type":"BasicTicker"}},"id":"1058","type":"LinearAxis"},{"attributes":{},"id":"1077","type":"BasicTickFormatter"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1064","type":"Line"},{"attributes":{},"id":"1078","type":"UnionRenderers"},{"attributes":{},"id":"1073","type":"LinearScale"},{"attributes":{"text":"II"},"id":"1025","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1083","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"1042","type":"LinearAxis"}],"center":[{"id":"1045","type":"Grid"},{"id":"1047","type":"Grid"}],"left":[{"id":"1043","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1049","type":"GlyphRenderer"},{"id":"1052","type":"GlyphRenderer"}],"title":{"id":"1041","type":"Title"},"toolbar":{"id":"1096","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1004","type":"Range1d"},"x_scale":{"id":"1097","type":"LinearScale"},"y_range":{"id":"1005","type":"Range1d"},"y_scale":{"id":"1099","type":"LinearScale"}},"id":"1038","type":"Plot"},{"attributes":{},"id":"1088","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"1060","type":"BasicTicker"}},"id":"1061","type":"Grid"},{"attributes":{"source":{"id":"1003","type":"ColumnDataSource"}},"id":"1034","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"1035","type":"Circle"},{"attributes":{},"id":"1086","type":"LinearScale"},{"attributes":{"source":{"id":"1002","type":"ColumnDataSource"}},"id":"1021","type":"CDSView"},{"attributes":{"data_source":{"id":"1002","type":"ColumnDataSource"},"glyph":{"id":"1035","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1037","type":"CDSView"}},"id":"1036","type":"GlyphRenderer"},{"attributes":{},"id":"1044","type":"BasicTicker"},{"attributes":{"source":{"id":"1002","type":"ColumnDataSource"}},"id":"1037","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"1051","type":"Circle"},{"attributes":{},"id":"1097","type":"LinearScale"},{"attributes":{"text":"III"},"id":"1041","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1096","type":"Toolbar"},{"attributes":{"text":"IV"},"id":"1057","type":"Title"},{"attributes":{},"id":"1099","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1109","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"1026","type":"LinearAxis"}],"center":[{"id":"1029","type":"Grid"},{"id":"1031","type":"Grid"}],"left":[{"id":"1027","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1033","type":"GlyphRenderer"},{"id":"1036","type":"GlyphRenderer"}],"title":{"id":"1025","type":"Title"},"toolbar":{"id":"1083","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1004","type":"Range1d"},"x_scale":{"id":"1084","type":"LinearScale"},"y_range":{"id":"1005","type":"Range1d"},"y_scale":{"id":"1086","type":"LinearScale"}},"id":"1022","type":"Plot"},{"attributes":{},"id":"1080","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1002","type":"ColumnDataSource"},"glyph":{"id":"1019","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1021","type":"CDSView"}},"id":"1020","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1003","type":"ColumnDataSource"},"glyph":{"id":"1032","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1034","type":"CDSView"}},"id":"1033","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"1046","type":"BasicTicker"}},"id":"1047","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":{"id":"1079","type":"Selection"},"selection_policy":{"id":"1078","type":"UnionRenderers"}},"id":"1003","type":"ColumnDataSource"},{"attributes":{},"id":"1079","type":"Selection"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1032","type":"Line"},{"attributes":{"callback":null,"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":{"id":"1081","type":"Selection"},"selection_policy":{"id":"1080","type":"UnionRenderers"}},"id":"1002","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#efefef"},"below":[{"id":"1058","type":"LinearAxis"}],"center":[{"id":"1061","type":"Grid"},{"id":"1063","type":"Grid"}],"left":[{"id":"1059","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1065","type":"GlyphRenderer"},{"id":"1068","type":"GlyphRenderer"}],"title":{"id":"1057","type":"Title"},"toolbar":{"id":"1109","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1004","type":"Range1d"},"x_scale":{"id":"1110","type":"LinearScale"},"y_range":{"id":"1005","type":"Range1d"},"y_scale":{"id":"1112","type":"LinearScale"}},"id":"1054","type":"Plot"},{"attributes":{"data_source":{"id":"1003","type":"ColumnDataSource"},"glyph":{"id":"1048","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1050","type":"CDSView"}},"id":"1049","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"1019","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"1030","type":"BasicTicker"}},"id":"1031","type":"Grid"},{"attributes":{"data_source":{"id":"1002","type":"ColumnDataSource"},"glyph":{"id":"1067","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1069","type":"CDSView"}},"id":"1068","type":"GlyphRenderer"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1077","type":"BasicTickFormatter"},"ticker":{"id":"1014","type":"BasicTicker"}},"id":"1011","type":"LinearAxis"},{"attributes":{},"id":"1030","type":"BasicTicker"},{"attributes":{"source":{"id":"1002","type":"ColumnDataSource"}},"id":"1069","type":"CDSView"},{"attributes":{"children":[[{"id":"1006","type":"Plot"},0,0],[{"id":"1022","type":"Plot"},0,1],[{"id":"1038","type":"Plot"},1,0],[{"id":"1054","type":"Plot"},1,1]],"sizing_mode":"scale_width"},"id":"1122","type":"GridBox"},{"attributes":{"source":{"id":"1003","type":"ColumnDataSource"}},"id":"1018","type":"CDSView"},{"attributes":{"ticker":{"id":"1028","type":"BasicTicker"}},"id":"1029","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1070","type":"Toolbar"},{"attributes":{},"id":"1028","type":"BasicTicker"},{"attributes":{},"id":"1071","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1090","type":"BasicTickFormatter"},"ticker":{"id":"1030","type":"BasicTicker"}},"id":"1027","type":"LinearAxis"},{"attributes":{},"id":"1046","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1088","type":"BasicTickFormatter"},"ticker":{"id":"1028","type":"BasicTicker"}},"id":"1026","type":"LinearAxis"},{"attributes":{},"id":"1075","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1003","type":"ColumnDataSource"}},"id":"1050","type":"CDSView"},{"attributes":{"source":{"id":"1002","type":"ColumnDataSource"}},"id":"1053","type":"CDSView"},{"attributes":{"data_source":{"id":"1002","type":"ColumnDataSource"},"glyph":{"id":"1051","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1053","type":"CDSView"}},"id":"1052","type":"GlyphRenderer"},{"attributes":{},"id":"1114","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1103","type":"BasicTickFormatter"},"ticker":{"id":"1046","type":"BasicTicker"}},"id":"1043","type":"LinearAxis"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1048","type":"Line"},{"attributes":{"ticker":{"id":"1044","type":"BasicTicker"}},"id":"1045","type":"Grid"},{"attributes":{},"id":"1081","type":"Selection"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"1101","type":"BasicTickFormatter"},"ticker":{"id":"1044","type":"BasicTicker"}},"id":"1042","type":"LinearAxis"},{"attributes":{},"id":"1116","type":"BasicTickFormatter"},{"attributes":{},"id":"1101","type":"BasicTickFormatter"},{"attributes":{},"id":"1112","type":"LinearScale"},{"attributes":{},"id":"1103","type":"BasicTickFormatter"}],"root_ids":["1124"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"97320234-bfd7-4bff-a07e-af2af3ea10a4","roots":{"1124":"dce024e0-b12f-4601-b026-c676a5551331"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();