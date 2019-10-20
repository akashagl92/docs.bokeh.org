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
      };var element = document.getElementById("69566e4b-8091-4c57-891f-56f5bcabf3fb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '69566e4b-8091-4c57-891f-56f5bcabf3fb' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"5814debe-b5e2-4e7f-bc6d-aecdcab0c923":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"18812","type":"Circle"},{"attributes":{},"id":"18878","type":"UnionRenderers"},{"attributes":{},"id":"18787","type":"SaveTool"},{"attributes":{"data_source":{"id":"18810","type":"ColumnDataSource"},"glyph":{"id":"18811","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18812","type":"Circle"},"selection_glyph":null,"view":{"id":"18814","type":"CDSView"}},"id":"18813","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"18827","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"18836","type":"Circle"},{"attributes":{},"id":"18882","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18830","type":"ColumnDataSource"},"glyph":{"id":"18831","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18832","type":"Circle"},"selection_glyph":null,"view":{"id":"18834","type":"CDSView"}},"id":"18833","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18784","type":"PanTool"},{"id":"18785","type":"WheelZoomTool"},{"id":"18786","type":"BoxZoomTool"},{"id":"18787","type":"SaveTool"},{"id":"18788","type":"ResetTool"},{"id":"18789","type":"HelpTool"}]},"id":"18790","type":"Toolbar"},{"attributes":{"source":{"id":"18830","type":"ColumnDataSource"}},"id":"18834","type":"CDSView"},{"attributes":{"level":"underlay","size":10},"id":"18870","type":"TeeHead"},{"attributes":{},"id":"18889","type":"Selection"},{"attributes":{"source":{"id":"18825","type":"ColumnDataSource"}},"id":"18829","type":"CDSView"},{"attributes":{"source":{"id":"18860","type":"ColumnDataSource"}},"id":"18864","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"18832","type":"Circle"},{"attributes":{},"id":"18875","type":"Selection"},{"attributes":{"data_source":{"id":"18860","type":"ColumnDataSource"},"glyph":{"id":"18861","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18862","type":"Circle"},"selection_glyph":null,"view":{"id":"18864","type":"CDSView"}},"id":"18863","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"18816","type":"Circle"},{"attributes":{},"id":"18867","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"18897","type":"Selection"},"selection_policy":{"id":"18896","type":"UnionRenderers"}},"id":"18860","type":"ColumnDataSource"},{"attributes":{},"id":"18784","type":"PanTool"},{"attributes":{},"id":"18772","type":"LinearScale"},{"attributes":{"source":{"id":"18840","type":"ColumnDataSource"}},"id":"18844","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"18873","type":"Selection"},"selection_policy":{"id":"18872","type":"UnionRenderers"}},"id":"18800","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18850","type":"ColumnDataSource"}},"id":"18854","type":"CDSView"},{"attributes":{},"id":"18888","type":"UnionRenderers"},{"attributes":{"source":{"id":"18845","type":"ColumnDataSource"}},"id":"18849","type":"CDSView"},{"attributes":{},"id":"18879","type":"Selection"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"18831","type":"Circle"},{"attributes":{},"id":"18873","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"18891","type":"Selection"},"selection_policy":{"id":"18890","type":"UnionRenderers"}},"id":"18845","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"18806","type":"Circle"},{"attributes":{"source":{"id":"18800","type":"ColumnDataSource"}},"id":"18804","type":"CDSView"},{"attributes":{},"id":"18892","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"18887","type":"Selection"},"selection_policy":{"id":"18886","type":"UnionRenderers"}},"id":"18835","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"18861","type":"Circle"},{"attributes":{"source":{"id":"18810","type":"ColumnDataSource"}},"id":"18814","type":"CDSView"},{"attributes":{},"id":"18883","type":"Selection"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"18870","type":"TeeHead"},"source":{"id":"18797","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"18871","type":"TeeHead"}},"id":"18798","type":"Whisker"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"18856","type":"Circle"},{"attributes":{"data_source":{"id":"18805","type":"ColumnDataSource"},"glyph":{"id":"18806","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18807","type":"Circle"},"selection_glyph":null,"view":{"id":"18809","type":"CDSView"}},"id":"18808","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"18841","type":"Circle"},{"attributes":{},"id":"18788","type":"ResetTool"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"18881","type":"Selection"},"selection_policy":{"id":"18880","type":"UnionRenderers"}},"id":"18820","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"18802","type":"Circle"},{"attributes":{},"id":"18887","type":"Selection"},{"attributes":{"source":{"id":"18855","type":"ColumnDataSource"}},"id":"18859","type":"CDSView"},{"attributes":{},"id":"18789","type":"HelpTool"},{"attributes":{"data_source":{"id":"18855","type":"ColumnDataSource"},"glyph":{"id":"18856","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18857","type":"Circle"},"selection_glyph":null,"view":{"id":"18859","type":"CDSView"}},"id":"18858","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"18857","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"18852","type":"Circle"},{"attributes":{},"id":"18885","type":"Selection"},{"attributes":{"data_source":{"id":"18850","type":"ColumnDataSource"},"glyph":{"id":"18851","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18852","type":"Circle"},"selection_glyph":null,"view":{"id":"18854","type":"CDSView"}},"id":"18853","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18820","type":"ColumnDataSource"},"glyph":{"id":"18821","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18822","type":"Circle"},"selection_glyph":null,"view":{"id":"18824","type":"CDSView"}},"id":"18823","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18869","type":"BasicTickFormatter"},"ticker":{"id":"18775","type":"BasicTicker"}},"id":"18774","type":"LinearAxis"},{"attributes":{},"id":"18869","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"18879","type":"Selection"},"selection_policy":{"id":"18878","type":"UnionRenderers"}},"id":"18815","type":"ColumnDataSource"},{"attributes":{"level":"underlay","size":10},"id":"18871","type":"TeeHead"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"18821","type":"Circle"},{"attributes":{"callback":null},"id":"18768","type":"DataRange1d"},{"attributes":{},"id":"18876","type":"UnionRenderers"},{"attributes":{},"id":"18770","type":"LinearScale"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"18895","type":"Selection"},"selection_policy":{"id":"18894","type":"UnionRenderers"}},"id":"18855","type":"ColumnDataSource"},{"attributes":{},"id":"18891","type":"Selection"},{"attributes":{},"id":"18895","type":"Selection"},{"attributes":{"data_source":{"id":"18835","type":"ColumnDataSource"},"glyph":{"id":"18836","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18837","type":"Circle"},"selection_glyph":null,"view":{"id":"18839","type":"CDSView"}},"id":"18838","type":"GlyphRenderer"},{"attributes":{},"id":"18785","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"18817","type":"Circle"},{"attributes":{},"id":"18890","type":"UnionRenderers"},{"attributes":{"source":{"id":"18805","type":"ColumnDataSource"}},"id":"18809","type":"CDSView"},{"attributes":{"source":{"id":"18835","type":"ColumnDataSource"}},"id":"18839","type":"CDSView"},{"attributes":{},"id":"18896","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"18899","type":"Selection"},"selection_policy":{"id":"18898","type":"UnionRenderers"}},"id":"18797","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"18822","type":"Circle"},{"attributes":{"callback":null},"id":"18766","type":"DataRange1d"},{"attributes":{},"id":"18886","type":"UnionRenderers"},{"attributes":{},"id":"18898","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18800","type":"ColumnDataSource"},"glyph":{"id":"18801","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18802","type":"Circle"},"selection_glyph":null,"view":{"id":"18804","type":"CDSView"}},"id":"18803","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"18889","type":"Selection"},"selection_policy":{"id":"18888","type":"UnionRenderers"}},"id":"18840","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"18801","type":"Circle"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"18846","type":"Circle"},{"attributes":{"source":{"id":"18815","type":"ColumnDataSource"}},"id":"18819","type":"CDSView"},{"attributes":{},"id":"18894","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"18893","type":"Selection"},"selection_policy":{"id":"18892","type":"UnionRenderers"}},"id":"18850","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"18883","type":"Selection"},"selection_policy":{"id":"18882","type":"UnionRenderers"}},"id":"18825","type":"ColumnDataSource"},{"attributes":{"text":"Years vs mpg with Quartile Ranges"},"id":"18764","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"18780","type":"BasicTicker"}},"id":"18783","type":"Grid"},{"attributes":{"source":{"id":"18820","type":"ColumnDataSource"}},"id":"18824","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"18875","type":"Selection"},"selection_policy":{"id":"18874","type":"UnionRenderers"}},"id":"18805","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18815","type":"ColumnDataSource"},"glyph":{"id":"18816","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18817","type":"Circle"},"selection_glyph":null,"view":{"id":"18819","type":"CDSView"}},"id":"18818","type":"GlyphRenderer"},{"attributes":{},"id":"18899","type":"Selection"},{"attributes":{},"id":"18893","type":"Selection"},{"attributes":{"below":[{"id":"18774","type":"LinearAxis"}],"center":[{"id":"18778","type":"Grid"},{"id":"18783","type":"Grid"},{"id":"18798","type":"Whisker"}],"left":[{"id":"18779","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"18803","type":"GlyphRenderer"},{"id":"18808","type":"GlyphRenderer"},{"id":"18813","type":"GlyphRenderer"},{"id":"18818","type":"GlyphRenderer"},{"id":"18823","type":"GlyphRenderer"},{"id":"18828","type":"GlyphRenderer"},{"id":"18833","type":"GlyphRenderer"},{"id":"18838","type":"GlyphRenderer"},{"id":"18843","type":"GlyphRenderer"},{"id":"18848","type":"GlyphRenderer"},{"id":"18853","type":"GlyphRenderer"},{"id":"18858","type":"GlyphRenderer"},{"id":"18863","type":"GlyphRenderer"}],"title":{"id":"18764","type":"Title"},"toolbar":{"id":"18790","type":"Toolbar"},"x_range":{"id":"18766","type":"DataRange1d"},"x_scale":{"id":"18770","type":"LinearScale"},"y_range":{"id":"18768","type":"DataRange1d"},"y_scale":{"id":"18772","type":"LinearScale"}},"id":"18763","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"18840","type":"ColumnDataSource"},"glyph":{"id":"18841","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18842","type":"Circle"},"selection_glyph":null,"view":{"id":"18844","type":"CDSView"}},"id":"18843","type":"GlyphRenderer"},{"attributes":{},"id":"18880","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"18851","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"18842","type":"Circle"},{"attributes":{"formatter":{"id":"18867","type":"BasicTickFormatter"},"ticker":{"id":"18780","type":"BasicTicker"}},"id":"18779","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18825","type":"ColumnDataSource"},"glyph":{"id":"18826","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18827","type":"Circle"},"selection_glyph":null,"view":{"id":"18829","type":"CDSView"}},"id":"18828","type":"GlyphRenderer"},{"attributes":{},"id":"18780","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"18847","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"18807","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"18877","type":"Selection"},"selection_policy":{"id":"18876","type":"UnionRenderers"}},"id":"18810","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"18862","type":"Circle"},{"attributes":{},"id":"18897","type":"Selection"},{"attributes":{"data_source":{"id":"18845","type":"ColumnDataSource"},"glyph":{"id":"18846","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18847","type":"Circle"},"selection_glyph":null,"view":{"id":"18849","type":"CDSView"}},"id":"18848","type":"GlyphRenderer"},{"attributes":{},"id":"18874","type":"UnionRenderers"},{"attributes":{},"id":"18872","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"18885","type":"Selection"},"selection_policy":{"id":"18884","type":"UnionRenderers"}},"id":"18830","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"18837","type":"Circle"},{"attributes":{"overlay":{"id":"18900","type":"BoxAnnotation"}},"id":"18786","type":"BoxZoomTool"},{"attributes":{},"id":"18881","type":"Selection"},{"attributes":{},"id":"18775","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"18811","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18900","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"18775","type":"BasicTicker"}},"id":"18778","type":"Grid"},{"attributes":{},"id":"18877","type":"Selection"},{"attributes":{},"id":"18884","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"18826","type":"Circle"}],"root_ids":["18763"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5814debe-b5e2-4e7f-bc6d-aecdcab0c923","roots":{"18763":"69566e4b-8091-4c57-891f-56f5bcabf3fb"}}];
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