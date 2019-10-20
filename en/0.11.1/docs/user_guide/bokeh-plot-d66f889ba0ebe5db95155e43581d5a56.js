
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
  };var element = document.getElementById("95f44087-d927-4586-b808-5761016dddf5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '95f44087-d927-4586-b808-5761016dddf5' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"73c44a92-2772-43f5-8814-61e1ba82ca6d":{"roots":{"references":[{"attributes":{},"id":"a89aa42e-bade-4f9b-b798-e32e28ce98bc","type":"BasicTicker"},{"attributes":{"callback":null,"plot":{"id":"5f117a5e-7f36-4c70-952f-7e4c8b211709","subtype":"Figure","type":"Plot"},"tooltips":"\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        "},"id":"3a12feed-b9d3-40ad-b34a-ad03bd3a34c3","type":"HoverTool"},{"attributes":{"callback":null},"id":"1d8a5ddc-3247-4d00-96b3-008570da589c","type":"DataRange1d"},{"attributes":{},"id":"862ca511-7517-40e7-b8b2-bc34f21d8bf1","type":"ToolEvents"},{"attributes":{},"id":"cef84b37-3fa6-4225-83aa-ee02cc63c44a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"dff6a736-a61f-4614-b99f-20af59625bf2","type":"BasicTickFormatter"},"plot":{"id":"5f117a5e-7f36-4c70-952f-7e4c8b211709","subtype":"Figure","type":"Plot"},"ticker":{"id":"a89aa42e-bade-4f9b-b798-e32e28ce98bc","type":"BasicTicker"}},"id":"cf5ce7fb-f3bb-45af-b505-fd88e1245389","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"5f117a5e-7f36-4c70-952f-7e4c8b211709","subtype":"Figure","type":"Plot"},"ticker":{"id":"a89aa42e-bade-4f9b-b798-e32e28ce98bc","type":"BasicTicker"}},"id":"36ac9d40-c3d6-4350-987b-c508b316ab88","type":"Grid"},{"attributes":{"data_source":{"id":"6729b532-66bc-44c9-9af8-33491e861096","type":"ColumnDataSource"},"glyph":{"id":"50572bdc-54fa-4041-a1c7-d7e6b03403cf","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"4c7c4f4b-923a-4100-8c52-481ad378738d","type":"Circle"},"selection_glyph":null},"id":"8ba4b0d8-1247-431d-b594-c0f8c13dde13","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c7c4f4b-923a-4100-8c52-481ad378738d","type":"Circle"},{"attributes":{"formatter":{"id":"22812ada-dec5-4e16-a235-bf9579c6507d","type":"BasicTickFormatter"},"plot":{"id":"5f117a5e-7f36-4c70-952f-7e4c8b211709","subtype":"Figure","type":"Plot"},"ticker":{"id":"cef84b37-3fa6-4225-83aa-ee02cc63c44a","type":"BasicTicker"}},"id":"e6adf34f-3160-4efb-a323-0da2a2e61704","type":"LinearAxis"},{"attributes":{},"id":"dff6a736-a61f-4614-b99f-20af59625bf2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","imgs","desc"],"data":{"desc":["A","b","C","d","E"],"imgs":["http://bokeh.pydata.org/static/snake.jpg","http://bokeh.pydata.org/static/snake2.png","http://bokeh.pydata.org/static/snake3D.png","http://bokeh.pydata.org/static/snake4_TheRevenge.png","http://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6729b532-66bc-44c9-9af8-33491e861096","type":"ColumnDataSource"},{"attributes":{},"id":"22812ada-dec5-4e16-a235-bf9579c6507d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e6adf34f-3160-4efb-a323-0da2a2e61704","type":"LinearAxis"}],"left":[{"id":"cf5ce7fb-f3bb-45af-b505-fd88e1245389","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e6adf34f-3160-4efb-a323-0da2a2e61704","type":"LinearAxis"},{"id":"702a8454-4d13-4980-a012-f6d313d37c8d","type":"Grid"},{"id":"cf5ce7fb-f3bb-45af-b505-fd88e1245389","type":"LinearAxis"},{"id":"36ac9d40-c3d6-4350-987b-c508b316ab88","type":"Grid"},{"id":"8ba4b0d8-1247-431d-b594-c0f8c13dde13","type":"GlyphRenderer"}],"title":"Mouse over the dots","tool_events":{"id":"862ca511-7517-40e7-b8b2-bc34f21d8bf1","type":"ToolEvents"},"tools":[{"id":"3a12feed-b9d3-40ad-b34a-ad03bd3a34c3","type":"HoverTool"}],"x_range":{"id":"32a51a65-984c-4634-802f-b40ae32f22f6","type":"DataRange1d"},"y_range":{"id":"1d8a5ddc-3247-4d00-96b3-008570da589c","type":"DataRange1d"}},"id":"5f117a5e-7f36-4c70-952f-7e4c8b211709","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"5f117a5e-7f36-4c70-952f-7e4c8b211709","subtype":"Figure","type":"Plot"},"ticker":{"id":"cef84b37-3fa6-4225-83aa-ee02cc63c44a","type":"BasicTicker"}},"id":"702a8454-4d13-4980-a012-f6d313d37c8d","type":"Grid"},{"attributes":{"callback":null},"id":"32a51a65-984c-4634-802f-b40ae32f22f6","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"50572bdc-54fa-4041-a1c7-d7e6b03403cf","type":"Circle"}],"root_ids":["5f117a5e-7f36-4c70-952f-7e4c8b211709"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"73c44a92-2772-43f5-8814-61e1ba82ca6d","elementid":"95f44087-d927-4586-b808-5761016dddf5","modelid":"5f117a5e-7f36-4c70-952f-7e4c8b211709"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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